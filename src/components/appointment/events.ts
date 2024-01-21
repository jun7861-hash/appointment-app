import { uuidv4 } from '@/helper/uuidv4';

export type EventType = 'consultation' | 'vaccination';

export type Sex = 'male' | 'female';

export type EventActions = {
  show: boolean;
};

export type OwnerDetails = {
  owner_name: string;
  image: string;
  email: string;
  contact_number: string;
  address: string;
};

export type VeterinaryDetails = {
  veterinary_name: string;
  image: string;
  address: string;
  building: string;
  email: string;
  contact_number: string;
};

export type PetDetails = {
  pet_name: string;
  image: string;
  type: string;
  breed: string;
  sex: Sex;
  birthday: Date;
};

export type Event = {
  uid: string;
  title: string;
  start: Date;
  type: EventType;
  end: Date;
  actions: EventActions;
  sourceResource?: unknown;
  owner_details: OwnerDetails;
  veterinary_details: VeterinaryDetails;
  pet_details: PetDetails;
};

export type Events = Event[];

export const events = [
  {
    uid: uuidv4(),
    title: 'Today',
    start: new Date('2024-01-20T08:00:00.000Z'),
    end: new Date('2024-01-20T09:00:00.000Z'),
    type: 'consultation',
    sourceResource: null,
    actions: {
      show: false,
    },
    owner_details: {
      owner_name: 'Chrissie Lee',
      image: 'https://dummyimage.com/80x80/aaa/111',
      email: 'chrissielee@gmail.com',
      contact_number: '+01 234 567 8910',
      address:
        '1st Avenue, Golden Street, Springville Village, San Diego, California',
    },
    veterinary_details: {
      veterinary_name: 'Anika Perry',
      image: 'https://dummyimage.com/52x52/aaa/111',
      address: '4517 Washington Avenue, Manchester, Kentucky 39495',
      building: 'Green Bow Vett',
      email: 'branch1@gmail.com',
      contact_number: '+63 0123 123',
    },
    pet_details: {
      pet_name: 'Brownie',
      image: 'https://dummyimage.com/52x52/aaa/111',
      type: 'Dog',
      breed: 'French Bulldog',
      sex: 'male',
      birthday: new Date('2023-07-19T09:00:00.000Z'),
    },
  },
] as Events;
