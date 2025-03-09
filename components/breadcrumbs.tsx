"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function formatBreadcrumb(text: string) {
  return text
    .replace(/-/g, " ")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function Breadcrumbs() {
  const pathname = usePathname();
  
  // Use useMemo to prevent recalculation on each render
  const breadcrumbItems = useMemo(() => {
    const pathSegments = pathname.split("/").filter(Boolean);
    const isDashboardPage = pathname === "/" || pathname === "/dashboard" || pathSegments.length === 0;
    const items = [];
    
    // Add Dashboard as first item - pre-determined, no conditionals inside render
    items.push(
      <BreadcrumbItem key="dashboard">
        {isDashboardPage ? (
          <BreadcrumbPage className="font-semibold text-primary">Dashboard</BreadcrumbPage>
        ) : (
          <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
        )}
      </BreadcrumbItem>
    );
    
    // Add segments
    pathSegments.forEach((segment, index) => {
      if (segment.toLowerCase() === "dashboard") return;
      
      const href = "/" + pathSegments.slice(0, index + 1).join("/");
      const isLast = index === pathSegments.length - 1;
      
      items.push(
        <BreadcrumbSeparator key={`sep-${href}`} />
      );
      
      items.push(
        <BreadcrumbItem key={href}>
          {isLast ? (
            <BreadcrumbPage className="font-semibold text-primary">
              {formatBreadcrumb(segment)}
            </BreadcrumbPage>
          ) : (
            <BreadcrumbLink href={href}>
              {formatBreadcrumb(segment)}
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
      );
    });
    
    return items;
  }, [pathname]); // Only recalculate when pathname changes

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems}
      </BreadcrumbList>
    </Breadcrumb>
  );
}