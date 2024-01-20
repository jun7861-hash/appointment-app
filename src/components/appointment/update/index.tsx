"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useSnapshot } from "valtio";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";

import { store } from "@/store";
import { selectVet, toggleVetOption, updateEvent } from "@/store/actions";
import { fileToDataURL } from "@/helper/fileToImage";
import { hasSelectedEvent } from "@/helper/hasSelectedEvent";
import { Event, Sex, EventType } from "../events";
import "./index.scss";

const Update = () => {
  const {
    event,
    form: { showVetOption, vetOptions },
    events,
  } = useSnapshot(store);
  const [imagePreview, setImagePreview] = useState(
    "https://dummyimage.com/100x100/aaa/111"
  );

  const updateInitialValues = {
    uid: hasSelectedEvent(event.selectedEvent) ? event.selectedEvent?.uid : "",
    title: hasSelectedEvent(event.selectedEvent)
      ? event.selectedEvent?.title
      : "",
    start: hasSelectedEvent(event.selectedEvent)
      ? event.selectedEvent?.start
      : new Date(),
    end: hasSelectedEvent(event.selectedEvent)
      ? event.selectedEvent?.end
      : new Date(),
    type: hasSelectedEvent(event.selectedEvent)
      ? event.selectedEvent?.type
      : ("consultation" as EventType),
    actions: {
      show: false,
    },
    owner_details: {
      owner_name: hasSelectedEvent(event.selectedEvent)
        ? event.selectedEvent?.owner_details.owner_name
        : "",
      image: hasSelectedEvent(event.selectedEvent)
        ? event.selectedEvent?.owner_details.image
        : "",
      email: hasSelectedEvent(event.selectedEvent)
        ? event.selectedEvent?.owner_details.email
        : "",
      contact_number: hasSelectedEvent(event.selectedEvent)
        ? event.selectedEvent?.owner_details.contact_number
        : "",
      address: hasSelectedEvent(event.selectedEvent)
        ? event.selectedEvent?.owner_details.address
        : "",
    },
    veterinary_details: {
      veterinary_name: hasSelectedEvent(event.selectedEvent)
        ? event.selectedEvent?.veterinary_details.veterinary_name
        : "",
      image: hasSelectedEvent(event.selectedEvent)
        ? event.selectedEvent?.veterinary_details.image
        : "",
      address: hasSelectedEvent(event.selectedEvent)
        ? event.selectedEvent?.veterinary_details.address
        : "",
      building: hasSelectedEvent(event.selectedEvent)
        ? event.selectedEvent?.veterinary_details.building
        : "",
      email: hasSelectedEvent(event.selectedEvent)
        ? event.selectedEvent?.veterinary_details.email
        : "",
      contact_number: hasSelectedEvent(event.selectedEvent)
        ? event.selectedEvent?.veterinary_details.contact_number
        : "",
    },
    pet_details: {
      pet_name: hasSelectedEvent(event) ? event?.pet_details.pet_name : "",
      type: hasSelectedEvent(event) ? event?.pet_details.type : "",
      breed: hasSelectedEvent(event) ? event?.pet_details.breed : "",
      sex: hasSelectedEvent(event) ? event?.pet_details.sex : ("male" as Sex),
      birthday: hasSelectedEvent(event)
        ? event?.pet_details.birthday
        : new Date(),
      image: hasSelectedEvent(event) ? event?.pet_details.image : "",
    },
  };

  const formEvent = useFormik<Event>({
    initialValues: updateInitialValues as Event,
    onSubmit: (values) => {
      console.log(`Appointment time: from ${values.start} to ${values.end}`);
      updateEvent(values);
    },
  });

  const handleStartDateChange = (date: Date) => {
    formEvent.setFieldValue("start", date);
  };

  const handleEndDateChange = (date: Date) => {
    formEvent.setFieldValue("end", date);
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      return null;
    }

    const preview = (await fileToDataURL(file)) as string;

    setImagePreview(preview);
    formEvent.setFieldValue("pet_details.image", preview);
  };

  return (
    <div className="update-form">
      <div className="header">
        <div className="block">
          <p className="title">Update Appointment</p>
        </div>
      </div>
      <form onSubmit={formEvent.handleSubmit}>
        <div className="service">
          <div className="view-block">
            <h3>APPOINTMENT DETAILS</h3>
            <div className="body">
              <div className="field">
                <label>Title</label>
                <input
                  className="input"
                  type="text"
                  value={formEvent.values.title}
                  name="title"
                  onChange={formEvent.handleChange}
                />
              </div>
              <div className="field">
                <label>Type of service</label>
                <select
                  name="type"
                  onChange={formEvent.handleChange}
                  onBlur={formEvent.handleBlur}
                  value={formEvent.values.type}
                >
                  <option value="consultation" label="Consultation" />
                  <option value="vaccination" label="Vaccination" />
                </select>
              </div>
              <div className="field">
                <label>Owner name</label>
                <input
                  className="input"
                  type="text"
                  value={formEvent.values.owner_details.owner_name}
                  name="owner_details.owner_name"
                  onChange={formEvent.handleChange}
                />
              </div>
              <div className="field">
                <label>Start</label>
                <DatePicker
                  className="input"
                  onChange={handleStartDateChange}
                  selected={formEvent.values.start}
                  name="start"
                  minDate={new Date()}
                  showTimeSelect
                  dateFormat="MMMM Do yyyy, h:mm a"
                />
              </div>
              <div className="field">
                <label>End</label>
                <DatePicker
                  className="input"
                  onChange={handleEndDateChange}
                  selected={formEvent.values.end}
                  name="end"
                  minDate={new Date()}
                  showTimeSelect
                  dateFormat="MMMM Do yyyy, h:mm a"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="clinic">
          <div className="view-block">
            <h3>CLINIC DETAILS</h3>
            <div className="head">
              <div className="block">
                <div className="image">
                  <Image
                    width={52}
                    height={52}
                    src={formEvent.values.veterinary_details.image}
                    alt={formEvent.values.veterinary_details.veterinary_name}
                  />
                </div>
                <div className="details">
                  <p className="title">
                    {formEvent.values.veterinary_details.veterinary_name}
                  </p>
                  <p className="sub">Los Angeles</p>
                </div>
              </div>
              <div className="actions">
                <button onClick={toggleVetOption}>
                  <svg
                    className="svg-fill"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.34582 7.50385C5.26856 7.58095 5.20727 7.67252 5.16545 7.77333C5.12364 7.87415 5.10211 7.98221 5.10211 8.09135C5.10211 8.2005 5.12364 8.30856 5.16545 8.40938C5.20727 8.51019 5.26856 8.60176 5.34582 8.67885L9.17082 12.5039C9.24791 12.5811 9.33948 12.6424 9.4403 12.6842C9.54111 12.726 9.64918 12.7476 9.75832 12.7476C9.86746 12.7476 9.97552 12.726 10.0763 12.6842C10.1771 12.6424 10.2687 12.5811 10.3458 12.5039L14.1708 8.67885C14.248 8.6017 14.3092 8.51011 14.3509 8.40931C14.3927 8.3085 14.4142 8.20046 14.4142 8.09135C14.4142 7.98225 14.3927 7.87421 14.3509 7.7734C14.3092 7.6726 14.248 7.58101 14.1708 7.50385C14.0937 7.4267 14.0021 7.3655 13.9013 7.32375C13.8005 7.28199 13.6924 7.2605 13.5833 7.2605C13.4742 7.2605 13.3662 7.28199 13.2654 7.32375C13.1646 7.3655 13.073 7.4267 12.9958 7.50385L9.75415 10.7372L6.52082 7.50385C6.19582 7.17885 5.66248 7.18719 5.34582 7.50385Z" />
                  </svg>
                </button>
                {showVetOption && (
                  <div className="options">
                    <p className="title">Select clinic</p>
                    <ul>
                      {vetOptions.map((vet: any, index: number) => (
                        <li key={index}>
                          <div
                            className="details"
                            onClick={() => selectVet(vet.veterinary_name)}
                          >
                            <p className="name">{vet.veterinary_name}</p>
                            <p className="address">{vet.address}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="body">
              <ul>
                <li>
                  <span className="left">
                    <i>
                      <svg
                        className="svg-fill"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3.33317 16.6666C2.87484 16.6666 2.48234 16.5033 2.15567 16.1766C1.82901 15.8499 1.66595 15.4577 1.66651 14.9999V4.99992C1.66651 4.54159 1.82984 4.14909 2.15651 3.82242C2.48317 3.49575 2.87539 3.3327 3.33317 3.33325H16.6665C17.1248 3.33325 17.5173 3.49659 17.844 3.82325C18.1707 4.14992 18.3337 4.54214 18.3332 4.99992V14.9999C18.3332 15.4583 18.1698 15.8508 17.8432 16.1774C17.5165 16.5041 17.1243 16.6671 16.6665 16.6666H3.33317ZM16.6665 6.66659L10.4373 10.5624C10.3679 10.6041 10.2948 10.6355 10.2182 10.6566C10.1415 10.6777 10.0687 10.688 9.99984 10.6874C9.93039 10.6874 9.85734 10.6771 9.78067 10.6566C9.70401 10.636 9.63123 10.6046 9.56234 10.5624L3.33317 6.66659V14.9999H16.6665V6.66659ZM9.99984 9.16659L16.6665 4.99992H3.33317L9.99984 9.16659ZM3.33317 6.87492V5.64575V5.66659V5.65659V6.87492Z" />
                      </svg>
                    </i>
                    Email
                  </span>
                  <span className="right">
                    {formEvent.values.veterinary_details.email}
                  </span>
                </li>
                <li>
                  <span className="left">
                    <i>
                      <svg
                        className="svg-stroke"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.98356 7.37767C7.56356 8.58569 8.35422 9.71789 9.35553 10.7192C10.3568 11.7205 11.4891 12.5112 12.6971 13.0912C12.801 13.1411 12.8529 13.166 12.9187 13.1852C13.1523 13.2533 13.4392 13.2044 13.637 13.0627C13.6927 13.0228 13.7403 12.9752 13.8356 12.8799C14.1269 12.5886 14.2726 12.4429 14.4191 12.3477C14.9715 11.9885 15.6837 11.9885 16.2361 12.3477C16.3825 12.4429 16.5282 12.5886 16.8196 12.8799L16.9819 13.0423C17.4248 13.4852 17.6462 13.7066 17.7665 13.9444C18.0058 14.4174 18.0058 14.976 17.7665 15.4489C17.6462 15.6867 17.4248 15.9082 16.9819 16.351L16.8506 16.4824C16.4092 16.9238 16.1886 17.1444 15.8885 17.313C15.5556 17.5 15.0385 17.6345 14.6567 17.6333C14.3126 17.6323 14.0774 17.5655 13.607 17.432C11.0792 16.7146 8.69387 15.3608 6.70388 13.3709C4.7139 11.3809 3.36017 8.99557 2.6427 6.46774C2.50919 5.99737 2.44244 5.76218 2.44141 5.41806C2.44028 5.03621 2.57475 4.51913 2.76176 4.18621C2.9303 3.88618 3.15098 3.66551 3.59233 3.22416L3.72369 3.09279C4.16656 2.64992 4.388 2.42849 4.62581 2.3082C5.09878 2.06898 5.65734 2.06898 6.1303 2.3082C6.36812 2.42849 6.58955 2.64992 7.03242 3.09279L7.19481 3.25518C7.48615 3.54652 7.63182 3.69219 7.72706 3.83867C8.08622 4.39108 8.08622 5.10323 7.72706 5.65564C7.63182 5.80212 7.48615 5.94779 7.19482 6.23913C7.09955 6.33439 7.05193 6.38202 7.01206 6.4377C6.87038 6.63556 6.82146 6.92244 6.88957 7.15607C6.90873 7.22181 6.93368 7.27376 6.98356 7.37767Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </i>
                    Phone
                  </span>
                  <span className="right">
                    {formEvent.values.veterinary_details.contact_number}
                  </span>
                </li>
                <li>
                  <span className="left">
                    <i>
                      <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-stroke"
                      >
                        <path
                          d="M7.99999 10.8334C9.38071 10.8334 10.5 9.71407 10.5 8.33335C10.5 6.95264 9.38071 5.83335 7.99999 5.83335C6.61928 5.83335 5.49999 6.95264 5.49999 8.33335C5.49999 9.71407 6.61928 10.8334 7.99999 10.8334Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.99999 18.3334C11.3333 15 14.6667 12.0153 14.6667 8.33335C14.6667 4.65146 11.6819 1.66669 7.99999 1.66669C4.3181 1.66669 1.33333 4.65146 1.33333 8.33335C1.33333 12.0153 4.66666 15 7.99999 18.3334Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </i>
                    Address
                  </span>
                  <span className="right">
                    {formEvent.values.veterinary_details.address}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pet">
          <div className="view-block">
            <h3>PET DETAILS</h3>
            <div className="body">
              <div className="field">
                <label>Pet name</label>
                <input
                  className="input"
                  value={formEvent.values.pet_details.pet_name}
                  name="pet_details.pet_name"
                  type="text"
                  onChange={formEvent.handleChange}
                />
              </div>
              <div className="field">
                <label>Type</label>
                <input
                  className="input"
                  value={formEvent.values.pet_details.type}
                  name="pet_details.type"
                  type="text"
                  placeholder="eg. Dog, Cat"
                  onChange={formEvent.handleChange}
                />
              </div>
              <div className="field">
                <label>Breed</label>
                <input
                  className="input"
                  value={formEvent.values.pet_details.breed}
                  name="pet_details.breed"
                  type="text"
                  placeholder="eg. Bulldog, Persian"
                  onChange={formEvent.handleChange}
                />
              </div>
              <div className="field">
                <label>Gender</label>
                <select
                  name="pet_details.sex"
                  onChange={formEvent.handleChange}
                  onBlur={formEvent.handleBlur}
                  value={formEvent.values.pet_details.sex}
                >
                  <option value="male" label="Male" />
                  <option value="female" label="Female" />
                </select>
              </div>
              <div className="field pet">
                <div className="uploader">
                  <label>Picture</label>
                  <input
                    onChange={handleImageChange}
                    type="file"
                    accept="image/*"
                    className="input"
                  />
                </div>

                <div className="preview">
                  <img alt={formEvent.values.pet_details.pet_name} src={imagePreview} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="submit">
          <div className="view-block">
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;
