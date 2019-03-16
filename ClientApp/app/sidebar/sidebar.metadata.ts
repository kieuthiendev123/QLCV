export interface RouteInfo {
    path: string;
    params?: string;
    title: string;
    icon: string;
    items?: Array<RouteInfo>
}
