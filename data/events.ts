import {v4 as uuid} from 'uuid';

interface Event {
  id: number,
  event: string;
  link: string;
  date: string;
  location: string;
}

const events: Event[] = [
  {
    id: uuid(),
    event: "SprigOne Tour",
    link: "https://tanzu.vmware.com/developer/springone-tour/2022/toronto/",
    date: "June 7-8, 2022",
    location: "Toronto, Canada"
  },
  {
    id: uuid(),
    event: "VueConf US",
    link: "https://us.vuejs.org/",
    date: "June 8-10, 2022",
    location: "Ft. Lauderdale, FL"
  }
]

export default events;
