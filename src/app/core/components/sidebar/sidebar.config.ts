export interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  path?: string;
  children?: MenuItem[];
}

export const SidenavItems: MenuItem[] = [
  // {
  //   id: "dashboard",
  //   label: "Dashboard",
  //   icon: "assets/images/dashboard.png",
  //   path: "/",
  // },
  {
    id: "employees",
    label: "Employees",
    icon: "assets/images/employee.png",
    path: "/employees",
  },
  {
    id: "vendors",
    label: "Vendors",
    icon: "assets/images/vendor-customer.png",
    path: "/vendors",
  },
  {
    id: "purchases",
    label: "Purchases",
    icon: "assets/images/circle-cropped.png",
    children: [
      {
        id: "purchasesOrdrs",
        label: "Purchases Orders",
        path: "/purchases/orders",
      },
      {
        id: "purchasesInvoices",
        label: "Purchases Invoices",
        path: "/purchases/invoices",
      },
      {
        id: "purchasesReturns",
        label: "Purchases Returns",
        path: "/purchases/returns",
      },
    ],
  },
  {
    id: "stock",
    label: "Stock",
    icon: "assets/images/category-product.png",
    path: "/stock",
  },
  {
    id: "sales",
    label: "Sales",
    icon: "assets/images/sales.png",
    children: [
      {
        id: "salesAll",
        label: "All Sales",
        path: "/sales",
      },
    ],
  },
  /*{
      id: "finance",
      label: "Finance",
      icon: "assets/images/finance.png",
      path: "/finance"
    },
    {
      id: "stock",
      label: "Stock",
      icon: "assets/images/stock.png",
      path: "/stock"
    },
    {
      id: "report",
      label: "Report",
      icon: "assets/images/reports.png",
      path: "/report"
    },
    {
      id: "userManagement",
      label: "User Management",
      icon: "assets/images/usermgt.png",
      path: "/user-management"
    },*/
  {
    id: "logout",
    label: "Log Out",
    icon: "assets/images/logout.png",
    path: "/",
  },
];
