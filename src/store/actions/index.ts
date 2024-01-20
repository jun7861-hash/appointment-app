import {
  Event as EventType,
  VeterinaryDetails as VeterinaryDetailsType,
} from "@/components/appointment/events";
import { store } from "@/store";

// NAVIGATION
export const toggleNotification = () => {
  store.navigation.actions.notification.show =
    !store.navigation.actions.notification.show;

  store.navigation.actions.settings.show = false;
  store.navigation.actions.signout.show = false;
};

export const toggleSettings = () => {
  store.navigation.actions.settings.show =
    !store.navigation.actions.settings.show;

  store.navigation.actions.notification.show = false;
  store.navigation.actions.signout.show = false;
};

export const toggleSignout = () => {
  store.navigation.actions.signout.show =
    !store.navigation.actions.signout.show;

  store.navigation.actions.notification.show = false;
  store.navigation.actions.settings.show = false;
};

// SIDEBAR
export const toggleSidebar = () => {
  store.sidebar.minimize = !store.sidebar.minimize;
};

// EVENT
export const toggleEventDropdown = (uid: string) => {
  store.events = store.events.map((event) => {
    if (event.uid === uid) {
      return { ...event, actions: { show: !event.actions.show } };
    }
    return event;
  });
};

export const hideEventDropdown = (uid: string) => {
  store.events = store.events.map((event) => {
    if (event.uid === uid) {
      return { ...event, actions: { show: false } };
    }
    return event;
  });
};

export const selectedEvent = (event: EventType) => {
  store.event.selectedEvent = event;
  showView();
  hideCreateForm();
  hideUpdateForm();
};

// VIEW
export const showView = () => {
  store.view.showView = true;
};

export const hideView = () => {
  store.view.showView = false;
};

// CREATE
export const showCreateForm = () => {
  store.form.showForm.create = true;

  hideUpdateForm();
  hideView();
};

export const hideCreateForm = () => {
  store.form.showForm.create = false;
};

// UPDATE
export const showUpdateForm = () => {
  store.form.showForm.update = true;
};

export const hideUpdateForm = () => {
  store.form.showForm.update = false;
};

export const toggleVetOption = () => {
  store.form.showVetOption = !store.form.showVetOption;
};

export const selectVet = (name: string) => {
  store.form.vetOptions.filter(
    (vet: VeterinaryDetailsType) => vet.veterinary_name === name
  );
};

export const createNewEvent = (event: EventType) => {
  store.events.push(event);
};

export const selectToUpdateEvent = (event: EventType) => {
  store.event.selectedEvent = event;

  showUpdateForm();
  hideView();
  hideCreateForm();
};

export const updateEvent = (eventToUpdate: EventType) => {
  store.events = store.events.map((event) =>
    event.uid === eventToUpdate.uid ? eventToUpdate : event
  );
};

export const removeEvent = (uid: string) => {
  store.events = store.events.filter((event) => event.uid !== uid);

  hideView();
  hideUpdateForm();
};
