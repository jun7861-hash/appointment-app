import Image from 'next/image';
import { useSnapshot } from 'valtio';

import { store } from '@/store';
import { showCreateForm } from '@/store/actions';
import { calculateAge, formatAge } from '@/helper/getAge';
import { toLocaleDateString } from '@/helper/formatDate';
import './index.scss';

const View = () => {
  const {
    event: { selectedEvent },
  } = useSnapshot(store);

  if (!('uid' in selectedEvent)) return;

  const handleNewAppointment = () => {
    showCreateForm();
  };

  const rawPetAge = calculateAge(selectedEvent.pet_details.birthday);
  const petBirthday = toLocaleDateString(
    new Date(selectedEvent.pet_details.birthday)
  );

  return (
    <div key={selectedEvent.uid} className="view-form">
      <div className="profile">
        <div className="block">
          <div className="image">
            <Image
              width={80}
              height={80}
              src={selectedEvent.owner_details.image}
              alt="profile"
            />
          </div>
          <div className="details">
            <p className="name">{selectedEvent.owner_details.owner_name}</p>
            <p className="role">Client</p>
          </div>
        </div>
        <div className="actions">
          <button>
            <svg
              className="svg-stroke"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 10.8333C10.4603 10.8333 10.8334 10.4602 10.8334 9.99998C10.8334 9.53974 10.4603 9.16665 10 9.16665C9.53978 9.16665 9.16669 9.53974 9.16669 9.99998C9.16669 10.4602 9.53978 10.8333 10 10.8333Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 4.99998C10.4603 4.99998 10.8334 4.62688 10.8334 4.16665C10.8334 3.70641 10.4603 3.33331 10 3.33331C9.53978 3.33331 9.16669 3.70641 9.16669 4.16665C9.16669 4.62688 9.53978 4.99998 10 4.99998Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 16.6666C10.4603 16.6666 10.8334 16.2935 10.8334 15.8333C10.8334 15.3731 10.4603 15 10 15C9.53978 15 9.16669 15.3731 9.16669 15.8333C9.16669 16.2935 9.53978 16.6666 10 16.6666Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="contact">
        <div className="view-block">
          <h3>CONTACT INFORMATION</h3>
          <div className="body">
            <ul>
              <li>
                <span className="left">
                  <i>
                    <svg
                      className="svg-fill"
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.33329 13.6666C1.87496 13.6666 1.48246 13.5033 1.15579 13.1766C0.829127 12.8499 0.666072 12.4577 0.666627 11.9999V1.99992C0.666627 1.54159 0.829961 1.14909 1.15663 0.82242C1.48329 0.495753 1.87552 0.332698 2.33329 0.333253H15.6666C16.125 0.333253 16.5175 0.496587 16.8441 0.823253C17.1708 1.14992 17.3338 1.54214 17.3333 1.99992V11.9999C17.3333 12.4583 17.17 12.8508 16.8433 13.1774C16.5166 13.5041 16.1244 13.6671 15.6666 13.6666H2.33329ZM15.6666 3.66659L9.43746 7.56242C9.36802 7.60409 9.29496 7.63548 9.21829 7.65659C9.14163 7.6777 9.06885 7.68798 8.99996 7.68742C8.93052 7.68742 8.85746 7.67714 8.78079 7.65659C8.70413 7.63603 8.63135 7.60464 8.56246 7.56242L2.33329 3.66659V11.9999H15.6666V3.66659ZM8.99996 6.16659L15.6666 1.99992H2.33329L8.99996 6.16659ZM2.33329 3.87492V2.64575V2.66659V2.65659V3.87492Z" />
                    </svg>
                  </i>
                  Email
                </span>
                <span className="right">
                  {selectedEvent.owner_details.email}
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
                  {selectedEvent.owner_details.contact_number}
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
                  {selectedEvent.owner_details.address}
                </span>
              </li>
            </ul>
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
                  src={selectedEvent.veterinary_details.image}
                  alt={selectedEvent.veterinary_details.veterinary_name}
                />
              </div>
              <div className="details">
                <p className="title">
                  {selectedEvent.veterinary_details.veterinary_name}
                </p>
                <p className="sub">Los Angeles</p>
              </div>
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
                  {selectedEvent.veterinary_details.email}
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
                  {selectedEvent.veterinary_details.contact_number}
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
                  {selectedEvent.veterinary_details.address}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pet">
        <div className="view-block">
          <h3>PET DETAILS</h3>
          <div className="head">
            <div className="block">
              <div className="image">
                <Image
                  width={52}
                  height={52}
                  src={
                    selectedEvent.pet_details.image.length
                      ? selectedEvent.pet_details.image
                      : 'https://dummyimage.com/52x52/aaa/111'
                  }
                  alt={selectedEvent.pet_details.pet_name}
                />
              </div>
              <div className="details">
                <p className="title">{selectedEvent.pet_details.pet_name}</p>
                <p className="sub">Los Angeles</p>
              </div>
            </div>
          </div>
          <div className="body">
            <ul>
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
                        d="M14.2857 7.14287V10C14.2857 10.3789 14.4362 10.7423 14.7041 11.0102C14.972 11.2781 15.3354 11.4286 15.7143 11.4286H16.4286M16.4286 11.4286C17.1863 11.4286 17.9131 11.1276 18.4489 10.5918C18.9847 10.0559 19.2857 9.32921 19.2857 8.57145V4.28573C19.2857 3.90685 19.1352 3.54349 18.8673 3.27558C18.5994 3.00767 18.236 2.85716 17.8571 2.85716H15.7143C15.2622 2.85673 14.8166 2.74901 14.4143 2.54287C13.0503 1.83107 11.5384 1.44941 9.99999 1.42859C8.45195 1.44493 6.92966 1.82673 5.55714 2.54287C5.16214 2.74135 4.72768 2.84875 4.28571 2.85716H2.14285C1.76397 2.85716 1.40061 3.00767 1.1327 3.27558C0.864789 3.54349 0.714279 3.90685 0.714279 4.28573V8.57145C0.714279 9.32921 1.0153 10.0559 1.55112 10.5918C2.08694 11.1276 2.81366 11.4286 3.57142 11.4286M16.4286 11.4286L15.9857 13.6714C15.7133 15.0588 14.9674 16.3085 13.8756 17.2068C12.7838 18.1051 11.4139 18.5962 9.99999 18.5962C8.58614 18.5962 7.21618 18.1051 6.12437 17.2068C5.03255 16.3085 4.28668 15.0588 4.01428 13.6714L3.57142 11.4286M3.57142 11.4286H4.28571C4.66459 11.4286 5.02795 11.2781 5.29586 11.0102C5.56377 10.7423 5.71428 10.3789 5.71428 10V7.14287M9.28571 14.2857H10.7143"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </i>
                  Breed
                </span>
                <span className="right">{selectedEvent.pet_details.type}</span>
              </li>
              <li>
                <span className="left">
                  <i>
                    <svg
                      className="svg-fill"
                      width="14"
                      height="19"
                      viewBox="0 0 14 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.25 0.5625H9.12501C8.87637 0.5625 8.63791 0.661272 8.4621 0.837087C8.28628 1.0129 8.18751 1.25136 8.18751 1.5C8.18751 1.74864 8.28628 1.9871 8.4621 2.16291C8.63791 2.33873 8.87637 2.4375 9.12501 2.4375H9.98438L8.76251 3.66172C8.13684 3.1418 7.40014 2.77251 6.60919 2.58233C5.81824 2.39214 4.99418 2.38614 4.20055 2.56479C3.40691 2.74343 2.6649 3.10195 2.03173 3.6127C1.39856 4.12345 0.891149 4.77279 0.548609 5.51065C0.206069 6.24851 0.0375558 7.05518 0.0560626 7.86846C0.0745694 8.68174 0.279602 9.47991 0.655351 10.2014C1.0311 10.9229 1.56753 11.5485 2.22327 12.0299C2.87902 12.5114 3.63657 12.8358 4.43751 12.9781V13.6875H2.87501C2.62637 13.6875 2.38791 13.7863 2.2121 13.9621C2.03628 14.1379 1.93751 14.3764 1.93751 14.625C1.93751 14.8736 2.03628 15.1121 2.2121 15.2879C2.38791 15.4637 2.62637 15.5625 2.87501 15.5625H4.43751V17.125C4.43751 17.3736 4.53628 17.6121 4.7121 17.7879C4.88791 17.9637 5.12637 18.0625 5.37501 18.0625C5.62365 18.0625 5.8621 17.9637 6.03792 17.7879C6.21374 17.6121 6.31251 17.3736 6.31251 17.125V15.5625H7.87501C8.12365 15.5625 8.36211 15.4637 8.53792 15.2879C8.71374 15.1121 8.81251 14.8736 8.81251 14.625C8.81251 14.3764 8.71374 14.1379 8.53792 13.9621C8.36211 13.7863 8.12365 13.6875 7.87501 13.6875H6.31251V12.9781C7.15154 12.8285 7.94219 12.4789 8.61757 11.9591C9.29295 11.4392 9.8332 10.7644 10.1926 9.99161C10.552 9.21882 10.72 8.37084 10.6824 7.5194C10.6448 6.66795 10.4027 5.83809 9.97657 5.1L11.3125 3.76562V4.625C11.3125 4.87364 11.4113 5.1121 11.5871 5.28791C11.7629 5.46373 12.0014 5.5625 12.25 5.5625C12.4986 5.5625 12.7371 5.46373 12.9129 5.28791C13.0887 5.1121 13.1875 4.87364 13.1875 4.625V1.5C13.1875 1.25136 13.0887 1.0129 12.9129 0.837087C12.7371 0.661272 12.4986 0.5625 12.25 0.5625ZM5.37501 11.1875C4.69514 11.1875 4.03053 10.9859 3.46524 10.6082C2.89994 10.2305 2.45935 9.6936 2.19917 9.06547C1.939 8.43735 1.87092 7.74619 2.00356 7.07938C2.1362 6.41257 2.46359 5.80006 2.94433 5.31932C3.42507 4.83858 4.03758 4.51119 4.70438 4.37855C5.37119 4.24591 6.06236 4.31399 6.69048 4.57416C7.3186 4.83434 7.85547 5.27493 8.23318 5.84023C8.6109 6.40552 8.81251 7.07013 8.81251 7.75C8.81147 8.66136 8.44898 9.53511 7.80455 10.1795C7.16011 10.824 6.28637 11.1865 5.37501 11.1875Z" />
                    </svg>
                  </i>
                  Sex
                </span>
                <span className="right capitalize">
                  {selectedEvent.pet_details.sex}
                </span>
              </li>
              <li>
                <span className="left">
                  <i>
                    <svg
                      className="svg-stroke"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 2.83333C11.5 2.36662 11.5 2.13327 11.4092 1.95501C11.3293 1.79821 11.2018 1.67072 11.045 1.59083C10.8667 1.5 10.6334 1.5 10.1667 1.5H7.83333C7.36662 1.5 7.13327 1.5 6.95501 1.59083C6.79821 1.67072 6.67072 1.79821 6.59083 1.95501C6.5 2.13327 6.5 2.36662 6.5 2.83333V5.16667C6.5 5.63338 6.5 5.86673 6.40917 6.04499C6.32928 6.20179 6.20179 6.32928 6.04499 6.40917C5.86673 6.5 5.63338 6.5 5.16667 6.5H2.83333C2.36662 6.5 2.13327 6.5 1.95501 6.59083C1.79821 6.67072 1.67072 6.79821 1.59083 6.95501C1.5 7.13327 1.5 7.36662 1.5 7.83333V10.1667C1.5 10.6334 1.5 10.8667 1.59083 11.045C1.67072 11.2018 1.79821 11.3293 1.95501 11.4092C2.13327 11.5 2.36662 11.5 2.83333 11.5H5.16667C5.63338 11.5 5.86673 11.5 6.04499 11.5908C6.20179 11.6707 6.32928 11.7982 6.40917 11.955C6.5 12.1333 6.5 12.3666 6.5 12.8333V15.1667C6.5 15.6334 6.5 15.8667 6.59083 16.045C6.67072 16.2018 6.79821 16.3293 6.95501 16.4092C7.13327 16.5 7.36662 16.5 7.83333 16.5H10.1667C10.6334 16.5 10.8667 16.5 11.045 16.4092C11.2018 16.3293 11.3293 16.2018 11.4092 16.045C11.5 15.8667 11.5 15.6334 11.5 15.1667V12.8333C11.5 12.3666 11.5 12.1333 11.5908 11.955C11.6707 11.7982 11.7982 11.6707 11.955 11.5908C12.1333 11.5 12.3666 11.5 12.8333 11.5H15.1667C15.6334 11.5 15.8667 11.5 16.045 11.4092C16.2018 11.3293 16.3293 11.2018 16.4092 11.045C16.5 10.8667 16.5 10.6334 16.5 10.1667V7.83333C16.5 7.36662 16.5 7.13327 16.4092 6.95501C16.3293 6.79821 16.2018 6.67072 16.045 6.59083C15.8667 6.5 15.6334 6.5 15.1667 6.5L12.8333 6.5C12.3666 6.5 12.1333 6.5 11.955 6.40917C11.7982 6.32928 11.6707 6.20179 11.5908 6.04499C11.5 5.86673 11.5 5.63338 11.5 5.16667V2.83333Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </i>
                  Age
                </span>
                <span className="right">{formatAge(rawPetAge)}</span>
              </li>
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
                      <path d="M4.16667 18.3334C3.70833 18.3334 3.31583 18.17 2.98917 17.8434C2.6625 17.5167 2.49945 17.1245 2.5 16.6667V5.00002C2.5 4.54169 2.66333 4.14919 2.99 3.82252C3.31667 3.49585 3.70889 3.3328 4.16667 3.33335H5V2.47919C5 2.24308 5.08 2.04863 5.24 1.89585C5.4 1.74308 5.59778 1.66669 5.83333 1.66669C6.06945 1.66669 6.2675 1.74669 6.4275 1.90669C6.5875 2.06669 6.66722 2.26446 6.66667 2.50002V3.33335H13.3333V2.47919C13.3333 2.24308 13.4133 2.04863 13.5733 1.89585C13.7333 1.74308 13.9311 1.66669 14.1667 1.66669C14.4028 1.66669 14.6008 1.74669 14.7608 1.90669C14.9208 2.06669 15.0006 2.26446 15 2.50002V3.33335H15.8333C16.2917 3.33335 16.6842 3.49669 17.0108 3.82335C17.3375 4.15002 17.5006 4.54224 17.5 5.00002V16.6667C17.5 17.125 17.3367 17.5175 17.01 17.8442C16.6833 18.1709 16.2911 18.3339 15.8333 18.3334H4.16667ZM4.16667 16.6667H15.8333V8.33335H4.16667V16.6667ZM4.16667 6.66669H15.8333V5.00002H4.16667V6.66669Z" />
                    </svg>
                  </i>
                  Birthday
                </span>
                <span className="right">{petBirthday}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="submit">
        <div className="view-block">
          <button onClick={handleNewAppointment}>New Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default View;
