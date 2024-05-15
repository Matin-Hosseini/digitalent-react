export type NavMenuTypes = {
  id: React.Key;
  title: String;
  path: any;
  submenu?: NavSubMenu[];
  megamenu?: NavMegamenu[];
};

export type NavSubMenu = { id: React.Key; title: String; path: any };
export type NavMegamenu = { id: React.Key; title: String; path: any };
