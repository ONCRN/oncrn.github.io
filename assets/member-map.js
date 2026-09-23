(() => {
  "use strict";

  const section = document.querySelector("#members");
  const shell = document.querySelector(".member-geography");
  if (!section || !shell || !window.L || !L.markerClusterGroup) return;

  // Registry geoPoints describe cities, not individual hospital campuses.
  const cities = [
    { id: "nanning", name: "Nanning", zh: "南宁", region: "guangxi", point: [22.81667, 108.31667] },
    { id: "qinzhou", name: "Qinzhou", zh: "钦州", region: "guangxi", point: [21.98247, 108.65061] },
    { id: "wuzhou", name: "Wuzhou", zh: "梧州", region: "guangxi", point: [23.48054, 111.28848] },
    { id: "yulin", name: "Yulin", zh: "玉林", region: "guangxi", point: [22.6305, 110.14686] },
    { id: "suzhou", name: "Suzhou", zh: "苏州", region: "jiangsu", point: [31.30408, 120.59538] }
  ];

  function init() {
    shell.hidden = false;
    const map = L.map("member-map", {
      scrollWheelZoom: false,
      minZoom: 3,
      maxZoom: 10,
      zoomControl: false,
      attributionControl: true
    });
    L.control.zoom({ position: "bottomright" }).addTo(map);
    map.attributionControl.setPrefix('<a href="https://leafletjs.com/">Leaflet</a>');

    const status = document.querySelector("#map-status");
    let hasLoadedTile = false;
    const loadTimeout = window.setTimeout(() => { status.hidden = hasLoadedTile; }, 12000);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).on("tileload", () => {
      hasLoadedTile = true;
      status.hidden = true;
      window.clearTimeout(loadTimeout);
    }).addTo(map);

    function countIcon(count, cluster = false) {
      return L.divIcon({
        className: cluster ? "member-marker member-cluster" : "member-marker",
        html: `<span>${count}</span>`,
        iconSize: [38, 38],
        iconAnchor: [19, 19]
      });
    }

    const clusters = L.markerClusterGroup({
      maxClusterRadius: zoom => zoom <= 6 ? 100 : 45,
      showCoverageOnHover: false,
      animate: false,
      spiderfyOnMaxZoom: false,
      iconCreateFunction(cluster) {
        const children = cluster.getAllChildMarkers();
        const count = children.reduce((sum, marker) => sum + marker.options.memberCount, 0);
        const regions = new Set(children.map(marker => marker.options.region));
        const label = regions.size === 1 ? (regions.has("guangxi") ? "Guangxi 广西" : "Jiangsu 江苏") : "ONCRN";
        const icon = countIcon(count, true);
        icon.options.html = `<span aria-label="${count} member institutions / ${count}家成员单位">${count}</span><small>${label}</small>`;
        return icon;
      }
    }).addTo(map);

    const popupWidth = () => Math.min(300, Math.max(150, map.getSize().x - 96));
    const markers = cities.map(city => {
      const members = [...section.querySelectorAll(`.centers-list li[data-city="${city.id}"]`)];
      const popup = document.createElement("div");
      popup.className = "member-popup";
      const heading = document.createElement("h3");
      heading.textContent = `${city.name} / ${city.zh}`;
      popup.append(heading);
      const list = document.createElement("ul");
      members.forEach(member => {
        const item = document.createElement("li");
        const link = member.querySelector("a").cloneNode(false);
        const name = document.createElement("span");
        name.textContent = member.querySelector("span").textContent;
        const zhName = document.createElement("span");
        zhName.lang = "zh-CN";
        zhName.textContent = member.querySelector('[lang="zh-CN"]').textContent;
        link.append(name, zhName);
        item.append(link);
        list.append(item);
      });
      popup.append(list);
      return L.marker(city.point, {
        icon: countIcon(members.length),
        title: `${city.name} ${city.zh}: ${members.length} member institutions / 家成员单位`,
        alt: `${city.name} ${city.zh}`,
        memberCount: members.length,
        region: city.region
      }).bindTooltip(`${city.name} ${city.zh}`, { permanent: true, direction: "bottom", offset: [0, 18], className: "city-label" })
        .bindPopup(popup, { maxWidth: popupWidth(), minWidth: Math.min(180, popupWidth()), maxHeight: 210, autoPanPadding: [24, 24] });
    });

    let activeRegion = "all";
    function showRegion(region) {
      activeRegion = region;
      const visible = markers.filter(marker => region === "all" || marker.options.region === region);
      map.closePopup();
      clusters.clearLayers();
      clusters.addLayers(visible);
      map.fitBounds(L.latLngBounds(visible.map(marker => marker.getLatLng())), {
        paddingTopLeft: [45, 45], paddingBottomRight: [45, 70], maxZoom: 8, animate: false
      });
      shell.querySelectorAll("[data-region]").forEach(button => {
        button.setAttribute("aria-pressed", String(button.dataset.region === region));
      });
    }

    shell.querySelectorAll("[data-region]").forEach(button => {
      button.addEventListener("click", () => showRegion(button.dataset.region));
    });
    map.on("resize", () => {
      markers.forEach(marker => {
        marker.getPopup().options.maxWidth = popupWidth();
        marker.getPopup().options.minWidth = Math.min(180, popupWidth());
      });
      showRegion(activeRegion);
    });
    showRegion("all");
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        observer.disconnect();
        init();
      }
    }, { rootMargin: "200px" });
    observer.observe(section);
  } else {
    init();
  }
})();
