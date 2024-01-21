import {
  events,
  Events as EventsType,
} from './../components/appointment/events';
import veterinary from '@/assets/json/veterinary.json';
import { proxy } from 'valtio';
import {
  Event as EventType,
  VeterinaryDetails as VeterinaryDetailsType,
  EventType as EventTypeOf,
  Sex,
} from '@/components/appointment/events';
import { uuidv4 } from '@/helper/uuidv4';

type Navigation = {
  actions: {
    notification: {
      show: boolean;
    };
    settings: {
      show: boolean;
    };
    signout: {
      show: boolean;
    };
  };
};

type Sidebar = {
  minimize: boolean;
};

type Event = {
  showActions: boolean;
  showEvent: boolean;
  selectedEvent: EventType | {};
};

type View = {
  showView: boolean;
};

type Form = {
  showVetOption: boolean;
  vetOptions: VeterinaryDetailsType[];
  selectedVet: VeterinaryDetailsType;
  event: EventType;
  showForm: {
    create: boolean;
    update: boolean;
  };
};

const currentDate = new Date();
const endDefaultDate = new Date(currentDate.getTime() + 60 * 60 * 1000);
export const store = proxy<{
  navigation: Navigation;
  sidebar: Sidebar;
  event: Event;
  view: View;
  form: Form;
  events: EventsType;
}>({
  navigation: {
    actions: {
      notification: {
        show: false,
      },
      settings: {
        show: false,
      },
      signout: {
        show: false,
      },
    },
  },
  sidebar: {
    minimize: false,
  },
  event: {
    showEvent: false,
    showActions: false,
    selectedEvent: {},
  },
  view: {
    showView: false,
  },
  form: {
    showVetOption: false,
    vetOptions: veterinary,
    selectedVet: veterinary[0],
    showForm: {
      create: false,
      update: false,
    },
    event: {
      uid: uuidv4(),
      title: '',
      start: new Date(),
      end: endDefaultDate,
      type: 'consultation' as EventTypeOf,
      actions: {
        show: false,
      },
      owner_details: {
        owner_name: '',
        image: '',
        email: '',
        contact_number: '',
        address: '',
      },
      veterinary_details: veterinary[0],
      pet_details: {
        pet_name: '',
        type: '',
        breed: '',
        sex: 'male' as Sex,
        birthday: new Date(),
        image: '',
      },
    },
  },

  events: events,
});
