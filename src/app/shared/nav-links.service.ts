import { NavLink } from './nav-link.model';

export class NavLinksService {
  links: NavLink[] = [
    { text: 'Info', route: '/info' },
    { text: 'Resources', route: '/resources' },
    { text: 'Rosters', route: '/rosters' },
    { text: 'Galleries', route: '/galleries' },
    { text: 'Event Calendar', route: '/events' },
  ];
}
