"use client";

import { formatDateWithSlash } from "@/lib/dateFormatter";
import {
  CalendarCheck,
  CalendarClock,
  CalendarX,
  Clock,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ModalDetails from "./ModalDetails";
import ModalRefused from "./ModalRefused";
import ModalAccepted from "./ModalAccepted";

export interface RdvCardProps {
  id: string;
  name: string;
  phone_number: string;
  postal_code: string;
  date: string;
  time: string;
  notes: string;
  status: string;
}

export default function RdvCard({
  name,
  date,
  status,
}: RdvCardProps) {
  return (
    <div className="flex md:flex-col md:items-center gap-6 md:w-full">
      <div>
        {status === "in_waiting" ? (
          <CalendarClock
            className="text-primary sm:w-40 sm:h-40"
            strokeWidth={1.2}
            size={148}
          />
        ) : status === "refused" ? (
          <CalendarX
            className="text-dashboardRed sm:w-40 sm:h-40"
            strokeWidth={1.2}
            size={148}
          />
        ) : (
          <CalendarCheck
            className="text-dashboardGreen sm:w-40 sm:h-40"
            strokeWidth={1.2}
            size={148}
          />
        )}
      </div>
      <div className="flex flex-col md:items-center gap-3 lg:gap-4 sm:text-lg">
        <p>
          {status === "in_waiting"
            ? "En attente de validation"
            : status === "refused"
            ? "Annulé"
            : "Validé"}
        </p>
        <div
          className={`h-[1px] w-full ${
            status === "in_waiting"
              ? "bg-primary"
              : status === "refused"
              ? "bg-dashboardRed"
              : "bg-dashboardGreen"
          }`}
        ></div>
        <div className="flex flex-col md:flex-row gap-3 sm:text-lg lg:text-base">
          <p className="flex items-center gap-2">
            <Clock /> {formatDateWithSlash(date)}
          </p>
          <p className="flex items-center gap-2">
            <UserRound />
            <span className="truncate max-w-[120px]">{name}</span>
          </p>
        </div>
        <div className="flex gap-3 md:gap-4 text-sm sm:text-base md:w-fit">
          {status === "in_waiting" ? (
            <>
              <ModalAccepted />
              <ModalRefused />
              <ModalDetails />
            </>
          ) : status === "refused" ? (
            <>
              <ModalDetails />
            </>
          ) : (
            <>
              <ModalDetails />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
