"use client";

import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useGetPropertiesQuery } from "@/state/api";
import { useAppSelector } from "@/state/redux";
import { useRouter } from "next/navigation";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

const GuestMap = () => {
  const mapContainerRef = useRef(null);
  const router = useRouter();
  const filters = useAppSelector((state) => state.global.filters);
  const { data: properties, isLoading, isError } = useGetPropertiesQuery(filters);

  useEffect(() => {
    if (isLoading || isError || !properties) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/tejchak/cmcdq6fm302ri01s6bwvk1nlh",
      center: filters.coordinates || [-118.25, 34.05],
      zoom: 9,
    });

    properties.forEach((property) => {
      const marker = new mapboxgl.Marker({ color: "#000" })
        .setLngLat([
          property.location.coordinates.longitude,
          property.location.coordinates.latitude,
        ])
        .setPopup(
          new mapboxgl.Popup().setHTML(
            `
            <div class="marker-popup" style="cursor:pointer;">
              <div class="marker-popup-image" style="width:40px;height:40px;background:#fff;border-radius:8px;display:inline-block;margin-right:10px;"></div>
              <div style="display:inline-block;vertical-align:top;">
                <div class="marker-popup-title" style="font-weight:bold;">${property.name}</div>
                <p class="marker-popup-price" style="margin:0;font-size:15px;"><b>$${property.pricePerMonth}</b> <span class="marker-popup-price-unit">/ month</span></p>
              </div>
            </div>
            `
          )
        )
        .addTo(map);
      marker.getElement().addEventListener("click", () => {
        marker.togglePopup();
      });
      const popupInstance = marker.getPopup();
      if (popupInstance) {
        popupInstance.on("open", () => {
          const popup = document.querySelector('.mapboxgl-popup-content') as HTMLElement | null;
          if (popup) {
            popup.style.cursor = 'pointer';
            popup.onclick = () => {
              router.push("/signin");
            };
          }
        });
      }
    });

    return () => map.remove();
  }, [isLoading, isError, properties, filters.coordinates, router]);

  if (isLoading) return <>Loading...</>;
  if (isError || !properties) return <div>Failed to fetch properties</div>;

  return (
    <div className="basis-5/12 grow relative rounded-xl">
      <div
        className="map-container rounded-xl"
        ref={mapContainerRef}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default GuestMap; 