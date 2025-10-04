import React, { useState } from "react";
import {
  Menu,
  X,
  LayoutDashboard,
  Home,
  Users,
  FileText,
  DollarSign,
  Settings,
  BarChart2,
  UserCircle,
  ChevronDown,
} from "lucide-react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import AdminNavbar from "../components/admin/navbar/AdminNavbar";

export default function AdminSidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    { name: "Dashboard", path: "/admin-dashboard", icon: <LayoutDashboard size={18} /> },
    {
      name: "Properties",
      icon: <Home size={18} />,
      children: [
        { name: "All Properties", path: "/admin-dashboard/properties" },
        { name: "Add Property", path: "/admin-dashboard/properties/add" },
      ],
    },
    {
      name: "Agents",
      icon: <Users size={18} />,
      children: [
        { name: "All Agents", path: "/admin-dashboard/agents" },
        { name: "Add Agent", path: "/admin-dashboard/agents/add" },
      ],
    },
    {
      name: "Clients",
      icon: <Users size={18} />,
      children: [
        { name: "All Clients", path: "/admin-dashboard/clients" },
        { name: "Contact Requests", path: "/admin-dashboard/clients/requests" },
      ],
    },
    {
      name: "Transactions",
      icon: <DollarSign size={18} />,
      children: [{ name: "All Transactions", path: "/admin-dashboard/transactions" }],
    },
    {
      name: "Content",
      icon: <FileText size={18} />,
      children: [
        { name: "Blogs", path: "/admin-dashboard/content/blogs" },
        { name: "About", path: "/admin-dashboard/content/about" },
        { name: "Faq", path: "/admin-dashboard/content/faq" },
        { name: "Privacy", path: "/admin-dashboard/content/privacy" },
        { name: "Terms", path: "/admin-dashboard/content/terms" },
      ],
    },
    {
      name: "Analytics",
      icon: <BarChart2 size={18} />,
      children: [
        { name: "Property Analytics", path: "/admin-dashboard/analytics/properties" },
        { name: "Agent Reports", path: "/admin-dashboard/analytics/agents" },
        { name: "Revenue Reports", path: "/admin-dashboard/analytics/revenue" },
      ],
    },
    {
      name: "Settings",
      icon: <Settings size={18} />,
      children: [
        { name: "General", path: "/settings/general" },
        { name: "SEO", path: "/settings/seo" },
        { name: "Notifications", path: "/settings/notifications" },
        { name: "Roles & Permissions", path: "/settings/roles" },
      ],
    },
    { name: "Account", path: "/account", icon: <UserCircle size={18} /> },
  ];

  const toggleMenu = (name) => {
    setActiveMenu((prev) => (prev === name ? null : name));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          collapsed ? "w-16" : "w-64"
        } bg-white border-r shadow-md transition-all duration-300 flex flex-col fixed h-full`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          {!collapsed && <img src="/src/assets/images/logos/logo.svg" alt="Logo" />}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            {collapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-auto">
          <ul className="space-y-1 px-2">
            {menuItems.map((item, idx) => {
              const isParentActive =
                item.path && location.pathname === item.path
                  ? true
                  : item.children?.some((child) => location.pathname === child.path);

              return item.children ? (
                <li key={idx}>
                  {/* Parent Button */}
                  <button
                    onClick={() => toggleMenu(item.name)}
                    className={`flex items-center justify-between w-full p-2 rounded-lg text-gray-700 ${
                      isParentActive ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      {!collapsed && <span>{item.name}</span>}
                    </div>
                    {!collapsed && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          activeMenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Child Links */}
                  <div
                    style={{
                      maxHeight: activeMenu === item.name || isParentActive ? `${item.children.length * 2.5}rem` : "0",
                    }}
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                  >
                    <ul className="ml-6 mt-1 space-y-1">
                      {item.children.map((child, cIdx) => (
                        <li key={cIdx}>
                          <NavLink
                            to={child.path}
                            className={`block w-full text-left p-2 rounded-md text-sm ${
                              location.pathname === child.path
                                ? "bg-blue-600 text-white"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                            onClick={() => setActiveMenu(item.name)}
                          >
                            {child.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={idx}>
                  <NavLink
                    to={item.path}
                    className={`flex items-center gap-2 p-2 rounded-lg w-full text-left ${
                      location.pathname === item.path
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveMenu(null)}
                  >
                    {item.icon}
                    {!collapsed && <span>{item.name}</span>}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className={`${collapsed ? "ml-16" : "ml-64"} flex-1 flex flex-col transition-all duration-300`}>
        <AdminNavbar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
