import './profile.css';
import React, { useEffect, memo } from 'react';
// import NavbarMobileCompo from '../Sidebar/NavbarMobileCompo'
import NavbarMobileCompo from 'sidebar/NavbarMobileCompo';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ProfileCompo = ({ dataFromSidebar, dataFromProfileCallback, handleProfileMobile }) => {

  const [edit, setEdit] = useState(localStorage.getItem('editState'));

  const [tempStore, setTempStore] = useState({});



  useEffect(() => {

    const tempStoreLocalRetrievedData = localStorage.getItem('tempStoreLocal');
    if (tempStoreLocalRetrievedData) {

      const newTempStoreLocalREtrievedData = JSON.parse(tempStoreLocalRetrievedData);
      setTempStore(newTempStoreLocalREtrievedData);
    }
  }, [])

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('vanshiOriginal@gmail.com');
  const [contactNumber, setContactNumber] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [minute, setMinute] = useState('');
  const [hour, setHour] = useState('');
  const [gender, setGender] = useState('');
  const [text, setText] = useState('');
  const [countryCode, setCountryCode] = useState('+1');





  // --------------------------- for mobile ---------------------------------------------------
  const profileOutermostContainer = document.getElementsByClassName('profile-outermost-container');


  // &&& HERE &&&
  useEffect(() => {
    dataFromProfileCallback(profileOutermostContainer[0]);

  }, [dataFromProfileCallback])

  const ClickedMe = (e) => {
    e.preventDefault();

    const profileOutermostContainer = document.getElementsByClassName('profile-outermost-container');

    profileOutermostContainer[0].classList.add('not-visible-profile');
    dataFromSidebar.classList.add('sidebar-main-mobile');
  }
  // --------------------------- for mobile ---------------------------------------------------





  // for refresh while resuming data entry inside profile form 
  // if((Boolean(edit) === false || edit === String(false)) && (localStorage.getItem('tempStoreLocal') !== '{}')){
  //   console.log("full");
  //   const handleRefreshWithTempStoreFull = e =>{
  //     localStorage.removeItem('tempStoreLocal')
  //     setTempStore({})
  //   }

  //   window.addEventListener('beforeunload', handleRefreshWithTempStoreFull)
  // }




  useEffect(() => {
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setGender(localStorage.getItem("gender"));
    setText(localStorage.getItem("text"));
    setYear(localStorage.getItem("year"));
    setMonth(localStorage.getItem("month"));
    setDay(localStorage.getItem("day"));
    setHour(localStorage.getItem("hour"));
    setMinute(localStorage.getItem("minute"));
    setContactNumber(localStorage.getItem("contactNumber"));
    setCountryCode(localStorage.getItem("countryCode"));
    setBirthdate(localStorage.getItem("birthdate"));


  }, [])






  useEffect(() => {
    localStorage.setItem('editState', edit);

    const savedLocalData = JSON.parse(localStorage.getItem('tempStoreLocal'));

    if (savedLocalData) {
      setTempStore(savedLocalData);
    }
    if (Boolean(edit) === false || edit === String(false)) {
      for (var i = 0; i < container.length; i++) {

        container[i].classList.remove('innermost-input-profile-container');
        container[i].classList.add('added-innermost-input-profile-container');

        container[i].classList.remove('profile-innermost-container');
        container[i].classList.add('added-profile-innermost-container');

        container[i].style.setProperty('width', '');
        label[i].style.setProperty('margin-bottom', '');
        label[i].classList.add('added-profile-label');
        if (inputProfile[i].name === 'birthdate') {
          inputProfile[i].type = 'date';
          inputProfile[i].style.setProperty('border', '');
          inputProfile[i].style.setProperty('border-color', '');
          inputProfile[i].style.setProperty('display', '');
          inputProfile[i].style.setProperty('font-weight', '')
          inputProfile[i].style.setProperty('height', '');
          inputProfile[i].style.setProperty('padding', '');
          inputProfile[i].classList.add('added-profile-input');
          inputProfile[i].removeAttribute('disabled');
          inputProfile[i].removeAttribute('readonly');
          if (savedLocalData) {
            if (savedLocalData.birthdate) {
              setBirthdate(savedLocalData.birthdate)
            }
          } else {

            inputProfile[i].value = birthdate;
          }

        } else if (inputProfile[i].type === 'tel') {
          const inputList = inputProfile[i].classList;


          inputProfile[i].style.setProperty('padding-left', '42px');
          inputList.remove('profile-input');
          inputList.add('added-contact-input');
          inputList.add('added2-contact-input');


          inputProfile[i].removeAttribute('disabled');
          inputProfile[i].removeAttribute('readonly');

          if (savedLocalData) {


            if (savedLocalData.phone) {
              setContactNumber(savedLocalData.phone)

            } else if (savedLocalData.countryCode) {
              setCountryCode(savedLocalData.countryCode)
            }
          } else {

            if (inputProfile[i].name === 'countryCode') {
              inputProfile[i].value = countryCode;
            } else {

              inputProfile[i].value = contactNumber;
            }
          }


        } else if (inputProfile[i].tagName === 'SELECT') {



          inputProfile[i].classList.remove('profile-gender-select');
          inputProfile[i].classList.add('added-gender-select');

          inputProfile[i].removeAttribute('disabled');
          inputProfile[i].removeAttribute('readonly');


          if (savedLocalData) {
            if (savedLocalData.gender) {
              setGender(savedLocalData.gender);
            }
          } else {
            inputProfile[i].value = gender;
          }

        } else {

          inputProfile[i].style.setProperty('border', '');
          inputProfile[i].style.setProperty('border-color', '');
          inputProfile[i].style.setProperty('display', '');
          inputProfile[i].style.setProperty('font-weight', '')
          inputProfile[i].style.setProperty('height', '');
          inputProfile[i].style.setProperty('padding', '');



          inputProfile[i].classList.add('added-profile-input');

          inputProfile[i].removeAttribute('disabled');
          inputProfile[i].removeAttribute('readonly');
          if (inputProfile[i].name === 'first_name') {

            if (savedLocalData) {

              if (savedLocalData.first_name) {

                setFirstName(savedLocalData.first_name);


              }

            } else {

              inputProfile[i].value = firstName;


            }




          } else if (inputProfile[i].name === 'last_name') {

            if (savedLocalData) {

              if (savedLocalData.last_name) {

                setLastName(savedLocalData.last_name)

              }

            }
            else {

              inputProfile[i].value = lastName;

            }
          } else {
            inputProfile[i].setAttribute('disabled', true);
            inputProfile[i].setAttribute('readonly', true);
            inputProfile[i].value = email;
          }
        }


      }








      for (var i = 0; i < container2.length; i++) {

        const containerList2 = container2[i].classList;
        const labelList2 = label2[i].classList;
        const inputList2 = inputProfile2[0].classList;
        container2[i].style.setProperty('display', 'block');
        containerList2.remove('profile-innermost-container2');


        labelList2.add('added-profile-label2');
        labelList2.remove('profile-label2');



        inputProfile2[0].style.setProperty('border', '');
        inputProfile2[0].style.setProperty('border-color', '');
        inputProfile2[0].style.setProperty('font-weight', '');
        inputProfile2[0].style.setProperty('display', '');
        inputProfile2[0].style.setProperty('height', '');
        inputProfile2[0].style.setProperty('padding', '');
        inputList2.add('added-profile-input');

        inputProfile2[0].removeAttribute('disabled');
        inputProfile2[0].removeAttribute('readonly');

        if (savedLocalData) {
          if (savedLocalData.text) {
            setText(savedLocalData.text)
          }
        } else {
          inputProfile2[0].value = text
        }


        if (inputProfile2[i].tagName === 'SELECT' && inputProfile2[i].classList.contains('date-select')) {


          for (let j = 0; j < dateSelect.length; j++) {
            const dateList = dateSelect[j].classList;

            dateList.add('edit-version-added-date-select');
            dateList.add('edit-version-added-profile-input-date-select');
            dateList.add('edit-version-new-date-select');

            dateSelect[j].removeAttribute('disabled');
            dateSelect[j].removeAttribute('readonly');
            if (savedLocalData) {
              if (savedLocalData.year) {
                setYear(savedLocalData.year);
              }
              if (savedLocalData.month) {


                setMonth(savedLocalData.month);
              }
              if (savedLocalData.day) {

                setDay(savedLocalData.day);
              }
            } else {

              if (dateSelect[j].name === 'year') {

                dateSelect[j].value = year
              }
              if (dateSelect[j].name === 'month') {
                dateSelect[j].value = month

              }

              if (dateSelect[j].name === 'day') {
                dateSelect[j].value = day

              }
            }
          }
        }
        if (inputProfile2[i].tagName === 'SELECT' && inputProfile2[i + 2].classList.contains('time-select')) {
          for (let k = 0; k < timeSelect.length; k++) {
            const timeList = timeSelect[k].classList;

            timeList.add('edit-version-added-time-select');
            timeList.add('edit-version-added-profile-input-time-select');
            timeList.add('edit-version-new-time-select');
            timeSelect[k].removeAttribute('disabled');
            timeSelect[k].removeAttribute('readonly');

            if (savedLocalData) {
              if (savedLocalData.hour) {
                setHour(savedLocalData.hour);
              }
              if (savedLocalData.minute) {

                setMinute(savedLocalData.minute);
              }
            } else {
              if (timeSelect[k].name === 'hour') {
                timeSelect[k].value = hour
              }
              if (timeSelect[k].name === 'minute') {
                timeSelect[k].value = minute
              }
            }
          }
        }
      }
    }

  }, [edit])








  const container = document.getElementsByClassName('container-js');
  const label = document.getElementsByClassName('profile-label');
  const label2 = document.getElementsByClassName('profile-label2-js');
  const inputProfile = document.getElementsByClassName('input-js');
  const inputProfile2 = document.getElementsByClassName('input2-js');





  const dateSelect = document.getElementsByClassName('date-select');
  const timeSelect = document.getElementsByClassName('time-select');




  const container2 = document.getElementsByClassName('container2-js');







  const handleCancleButton = (e) => {
    e.preventDefault();

    if (typeof edit === 'string') {
      var editNew = true;
    } else {
      var editNew = !edit

    }
    setEdit(editNew);



    if (editNew === true || editNew === String(true)) {




      for (var i = 0; i < container.length; i++) {



        const list = container[i].classList;
        const label_list = label[i].classList;
        const inputList = inputProfile[i].classList;
        if (inputProfile[i].type === 'date') {

          inputProfile[i].type = 'text';
          inputList.remove('added-profile-input');
          inputList.add('profile-input');
          inputProfile[i].setAttribute('disabled', true);
          inputProfile[i].setAttribute('readonly', true);

          setBirthdate(localStorage.getItem('birthdate'));

        } else if (inputProfile[i].type === 'tel') {

          inputProfile[i].style.setProperty('padding-left', '');
          inputList.add('profile-input');
          inputList.remove('added-contact-input');
          inputList.remove('added2-contact-input');
          inputProfile[i].setAttribute('disabled', true);
          inputProfile[i].setAttribute('readonly', true);
          setContactNumber(localStorage.getItem('contactNumber'));
          setCountryCode(localStorage.getItem('countryCode'));
        } else if (inputProfile[i].tagName === 'SELECT') {
          inputList.remove('added-gender-select');
          inputList.add('profile-gender-select');
          inputProfile[i].setAttribute('disabled', true);
          inputProfile[i].setAttribute('readonly', true);
          setGender(localStorage.getItem('gender'));
        }
        else {
          inputList.remove('added-profile-input');
          inputList.add('profile-input');
          inputProfile[i].setAttribute('disabled', true);
          inputProfile[i].setAttribute('readonly', true);
          if (inputProfile[i].name === 'first_name') {
            setFirstName(localStorage.getItem('firstName'));
          } else {
            setLastName(localStorage.getItem('lastName'));
          }
        }



        label_list.add('profile-label');
        label_list.remove('added-profile-label');


        list.remove('added-profile-innermost-container');
        list.remove('added-innermost-input-profile-container');
        list.add('profile-innermost-container');
        list.add('innermost-input-profile-container');
      }

      for (var i = 0; i < container2.length; i++) {

        const containerList2 = container2[i].classList;
        const labelList2 = label2[i].classList;
        const inputList2 = inputProfile2[0].classList;



        container2[i].style.setProperty('display', '');
        containerList2.add('profile-innermost-container2');
        labelList2.add('profile-label');
        labelList2.remove('added-profile-label');
        inputList2.remove('added-profile-input');
        inputList2.add('profile-input');
        inputProfile2[0].setAttribute('disabled', true);
        inputProfile2[0].setAttribute('readonly', true);
        setText(localStorage.getItem('text'));




        if (inputProfile2[i].tagName === 'SELECT' && inputProfile2[i].classList.contains('date-select')) {



          for (let j = 0; j < dateSelect.length; j++) {
            const dateList = dateSelect[j].classList;


            dateList.remove('edit-version-added-date-select');
            dateList.remove('edit-version-added-profile-input-date-select');
            dateList.remove('edit-version-new-date-select');

            dateList.add('date-select');
            dateList.add('profile-input-date-select');
            dateSelect[j].setAttribute('disabled', true);
            dateSelect[j].setAttribute('readonly', true);
            if (dateSelect[j].name === 'year') {
              setYear(localStorage.getItem('year'));
            } else if (dateSelect[j].name === 'month') {
              setMonth(localStorage.getItem('month'));
            } else {
              setDay(localStorage.getItem('day'));
            }
          }
        }

        if (inputProfile2[i].tagName === 'SELECT' && inputProfile2[i + 2].classList.contains('time-select')) {
          for (let k = 0; k < timeSelect.length; k++) {
            const timeList = timeSelect[k].classList;

            timeList.remove('edit-version-added-time-select');
            timeList.remove('edit-version-added-profile-input-time-select');
            timeList.remove('edit-version-new-time-select');
            timeSelect[k].setAttribute('disabled', true);
            timeSelect[k].setAttribute('readonly', true);
            if (timeSelect[k].name === 'hour') {
              setHour(localStorage.getItem('hour'));
            } else {
              setMinute(localStorage.getItem('minute'));
            }
          }
        }
      }
    }

    localStorage.removeItem('tempStoreLocal');
    setTempStore({})



    // &&& HERE &&& 
    handleProfileMobile();
  }




  const handleSubmit = (e) => {
    e.preventDefault();

    if (contactNumber.length > 10 || contactNumber.length < 10) {
      toast.error('Contact number invalid', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return
    }




    else {
      toast.success('profile data saved', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",


        onClose: () => {


          const callingVar = true;
          setEdit(callingVar);

          if (callingVar === true || callingVar === String(true)) {

            for (var i = 0; i < container.length; i++) {



              const list = container[i].classList;
              const label_list = label[i].classList;
              const inputList = inputProfile[i].classList;
              if (inputProfile[i].type === 'date') {

                inputProfile[i].type = 'text';
                inputList.remove('added-profile-input');
                inputList.add('profile-input');
                inputProfile[i].setAttribute('disabled', true);
                inputProfile[i].setAttribute('readonly', true);
                inputProfile[i].value = localStorage.getItem('birthdate');


              } else if (inputProfile[i].type === 'tel') {

                inputProfile[i].style.setProperty('padding-left', '');
                inputList.add('profile-input');
                inputList.remove('added-contact-input');
                inputList.remove('added2-contact-input');
                inputProfile[i].setAttribute('disabled', true);
                inputProfile[i].setAttribute('readonly', true);
                inputProfile[i].value = localStorage.getItem('contactNumber');
              } else if (inputProfile[i].tagName === 'SELECT') {
                inputList.remove('added-gender-select');
                inputList.add('profile-gender-select');
                inputProfile[i].setAttribute('disabled', true);
                inputProfile[i].setAttribute('readonly', true);
                inputProfile[i].value = localStorage.getItem('gender');
              }
              else {
                inputList.remove('added-profile-input');
                inputList.add('profile-input');
                inputProfile[i].setAttribute('disabled', true);
                inputProfile[i].setAttribute('readonly', true);
                if (inputProfile[i].name === 'first_name') {
                  inputProfile[i].value = localStorage.getItem('firstName');
                } else if (inputProfile[i].name === 'email') {
                  inputProfile[i].value = localStorage.getItem("email");
                } else {
                  inputProfile[i].value = localStorage.getItem('lastName');
                }
              }



              label_list.add('profile-label');
              label_list.remove('added-profile-label');


              list.remove('added-profile-innermost-container');
              list.remove('added-innermost-input-profile-container');
              list.add('profile-innermost-container');
              list.add('innermost-input-profile-container');
            }

            for (var i = 0; i < container2.length; i++) {

              const containerList2 = container2[i].classList;
              const labelList2 = label2[i].classList;
              const inputList2 = inputProfile2[0].classList;



              container2[i].style.setProperty('display', '');
              containerList2.add('profile-innermost-container2');

              labelList2.add('profile-label');
              labelList2.remove('added-profile-label');

              inputList2.remove('added-profile-input');
              inputList2.add('profile-input');
              inputProfile2[0].setAttribute('disabled', true);
              inputProfile2[0].setAttribute('readonly', true);

              inputProfile2[i].value = localStorage.getItem('text');



              if (inputProfile2[i].tagName === 'SELECT' && inputProfile2[i].classList.contains('date-select')) {



                for (let j = 0; j < dateSelect.length; j++) {
                  const dateList = dateSelect[j].classList;


                  dateList.remove('edit-version-added-date-select');
                  dateList.remove('edit-version-added-profile-input-date-select');
                  dateList.remove('edit-version-new-date-select');

                  dateList.add('date-select');
                  dateList.add('profile-input-date-select');
                  dateSelect[j].setAttribute('disabled', true);
                  dateSelect[j].setAttribute('readonly', true);

                }
              }

              if (inputProfile2[i].tagName === 'SELECT' && inputProfile2[i + 2].classList.contains('time-select')) {
                for (let k = 0; k < timeSelect.length; k++) {
                  const timeList = timeSelect[k].classList;

                  timeList.remove('edit-version-added-time-select');
                  timeList.remove('edit-version-added-profile-input-time-select');
                  timeList.remove('edit-version-new-time-select');
                  timeSelect[k].setAttribute('disabled', true);
                  timeSelect[k].setAttribute('readonly', true);
                }
              }
            }
          }


          localStorage.removeItem('tempStoreLocal');
          setTempStore({})
          //  &&& HERE &&&
          handleProfileMobile();
        }

      }
      );
    }

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("gender", gender);
    localStorage.setItem("text", text);
    localStorage.setItem("year", year);
    localStorage.setItem("month", month);
    localStorage.setItem("day", day);
    localStorage.setItem("hour", hour);
    localStorage.setItem("minute", minute);
    localStorage.setItem("contactNumber", contactNumber);
    localStorage.setItem("countryCode", countryCode);
    localStorage.setItem("birthdate", birthdate);

  }

  const handleChangeSession = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setTempStore(prevData => ({ ...prevData, [name]: value }));
  }

  useEffect(() => {

    localStorage.setItem('tempStoreLocal', JSON.stringify(tempStore));
  }, [tempStore])


  const handleEditNew = (e) => {
    e.preventDefault();
    const newEdit = !edit;
    setEdit(newEdit)
    if (Boolean(newEdit) === false || edit === String(false)) {

      for (var i = 0; i < container.length; i++) {

        container[i].classList.remove('innermost-input-profile-container');
        container[i].classList.add('added-innermost-input-profile-container');

        container[i].classList.remove('profile-innermost-container');
        container[i].classList.add('added-profile-innermost-container');

        container[i].style.setProperty('width', '');
        label[i].style.setProperty('margin-bottom', '');
        label[i].classList.add('added-profile-label');


        if (inputProfile[i].name === 'birthdate') {
          inputProfile[i].type = 'date';
          inputProfile[i].style.setProperty('border', '');
          inputProfile[i].style.setProperty('border-color', '');
          inputProfile[i].style.setProperty('display', '');
          inputProfile[i].style.setProperty('font-weight', '')
          inputProfile[i].style.setProperty('height', '');
          inputProfile[i].style.setProperty('padding', '');
          inputProfile[i].classList.add('added-profile-input');
          inputProfile[i].removeAttribute('disabled');
          inputProfile[i].removeAttribute('readonly');

          setBirthdate(localStorage.getItem('birthdate'));
        } else if (inputProfile[i].type === 'tel') {
          const inputList = inputProfile[i].classList;


          inputProfile[i].style.setProperty('padding-left', '42px');
          inputList.remove('profile-input');
          inputList.add('added-contact-input');
          inputList.add('added2-contact-input');


          inputProfile[i].removeAttribute('disabled');
          inputProfile[i].removeAttribute('readonly');
          setContactNumber(localStorage.getItem('contactNumber'));
          setCountryCode(localStorage.getItem('countryCode'));
        } else if (inputProfile[i].tagName === 'SELECT') {

          inputProfile[i].classList.remove('profile-gender-select');
          inputProfile[i].classList.add('added-gender-select');
          inputProfile[i].removeAttribute('disabled');
          inputProfile[i].removeAttribute('readonly');

          setGender(localStorage.getItem('gender'));
        } else {

          inputProfile[i].style.setProperty('border', '');
          inputProfile[i].style.setProperty('border-color', '');
          inputProfile[i].style.setProperty('display', '');
          inputProfile[i].style.setProperty('font-weight', '')
          inputProfile[i].style.setProperty('height', '');
          inputProfile[i].style.setProperty('padding', '');



          inputProfile[i].classList.add('added-profile-input');

          inputProfile[i].removeAttribute('disabled');
          inputProfile[i].removeAttribute('readonly');

          if (inputProfile[i].name === 'first_name') {
            setFirstName(localStorage.getItem('firstName'));
          } else if (inputProfile[i].name === 'last_name') {
            setLastName(localStorage.getItem('lastName'));
          } else {

            inputProfile[i].setAttribute('disabled', true);
            inputProfile[i].setAttribute('readonly', true);

          }
        }


      }








      for (var i = 0; i < container2.length; i++) {

        const containerList2 = container2[i].classList;
        const labelList2 = label2[i].classList;
        const inputList2 = inputProfile2[0].classList;






        container2[i].style.setProperty('display', 'block');
        containerList2.remove('profile-innermost-container2');


        labelList2.add('added-profile-label2');
        labelList2.remove('profile-label2');



        inputProfile2[0].style.setProperty('border', '');
        inputProfile2[0].style.setProperty('border-color', '');
        inputProfile2[0].style.setProperty('font-weight', '');
        inputProfile2[0].style.setProperty('display', '');
        inputProfile2[0].style.setProperty('height', '');
        inputProfile2[0].style.setProperty('padding', '');
        inputList2.add('added-profile-input');

        inputProfile2[0].removeAttribute('disabled');
        inputProfile2[0].removeAttribute('readonly');
        setText(localStorage.getItem('text'));




        if (inputProfile2[i].tagName === 'SELECT' && inputProfile2[i].classList.contains('date-select')) {


          for (let j = 0; j < dateSelect.length; j++) {
            const dateList = dateSelect[j].classList;

            dateList.add('edit-version-added-date-select');
            dateList.add('edit-version-added-profile-input-date-select');
            dateList.add('edit-version-new-date-select');

            dateSelect[j].removeAttribute('disabled');
            dateSelect[j].removeAttribute('readonly');
            if (dateSelect[j].name === 'year') {

              setYear(localStorage.getItem('year'))
            } else if (dateSelect[j].name === 'month') {

              setMonth(localStorage.getItem('month'))
            } else {

              setDay(localStorage.getItem('day'))
            }

          }
        }
        if (inputProfile2[i].tagName === 'SELECT' && inputProfile2[i + 2].classList.contains('time-select')) {
          for (let k = 0; k < timeSelect.length; k++) {
            const timeList = timeSelect[k].classList;

            timeList.add('edit-version-added-time-select');
            timeList.add('edit-version-added-profile-input-time-select');
            timeList.add('edit-version-new-time-select');
            timeSelect[k].removeAttribute('disabled');
            timeSelect[k].removeAttribute('readonly');

            if (timeSelect[k].name === 'hour') {

              setHour(localStorage.getItem('hour'))
            } else {

              setMinute(localStorage.getItem('minute'))
            }
          }
        }


      }
    }

  }

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"

      />
      {/* <div className='profile-outermost-container' style={{ 'height': '476px' }}> */}
      {/* <div className='profile-outermost-container' style={{'height': `${profileOutermostContainer[0].clientHeight}px`}}>
        <div className='profile-outermost-container2' style={{ 'height': 'auto', 'minHeight': `${profileOutermostContainer[0].clientHeight}px` }}> */}
      <div className='profile-outermost-container'>
        <div className='profile-outermost-container2'>
          <div className='profile-outermost-container3'>



            <NavbarMobileCompo ClickedMe={ClickedMe} navTitle='My Profile' />

            <div className='profile-wrapper'>
              <form onSubmit={handleSubmit} >
                <div className='profile-outer-container'>
                  <div className='profile-inner-container second-inner-container'>
                    <div id='1' className='profile-innermost-container innermost-input-profile-container container-js'>
                      <label className='profile-label'>First Name:</label>
                      <input disabled id='first_name' className='profile-input input-js' placeholder name='first_name' type='text' readonly value={firstName} onChange={e => {
                        setFirstName(e.target.value);
                        handleChangeSession(e);
                      }} ></input>

                    </div>

                  </div>
                </div>


                <div className='profile-outer-container'>
                  <div className='profile-inner-container second-inner-container'>
                    <div className='profile-innermost-container innermost-input-profile-container container-js'>
                      <label className='profile-label'>Last Name:</label>
                      <input disabled className='profile-input input-js' placeholder name='last_name' type='text' readonly value={lastName} onChange={e => { setLastName(e.target.value); handleChangeSession(e) }} ></input>

                    </div>
                  </div>
                </div>

                <div className='profile-outer-container'>
                  <div className='profile-inner-container second-inner-container'>
                    <div className='profile-innermost-container innermost-input-profile-container container-js'>
                      <label className='profile-label'>Email:</label>
                      <input disabled className='profile-input input-js' placeholder name='email' type='email' readonly value={email}></input>


                    </div>
                  </div>
                </div>




                <div className='profile-outer-container'>
                  <div className='profile-inner-container second-inner-container'>
                    <div className='profile-innermost-container innermost-input-profile-container container-js'>
                      <label className='profile-label'>Contact number:</label>

                      <input disabled className='profile-input input-js' placeholder name='phone' type='tel' readonly

                        // value={((typeof edit === 'string') ? (edit === String(true)) : (Boolean(edit) === true)) ? `${countryCode} ${contactNumber}` : contactNumber.replace(/([a-zA-Z])/g, "")}
                        value={((typeof edit === 'string') ? (edit === String(true)) : (Boolean(edit) === true)) ? `${countryCode} ${contactNumber}` : contactNumber?.replace(/([a-zA-Z])/g, "")}
                        onChange={e => { setContactNumber(e.target.value); handleChangeSession(e); }}></input>

                      {((typeof edit === 'string') ? (edit === String(false)) : (Boolean(edit) === false)) ? (
                        <div>
                          <input className='contact-inner-input' type='text' style={{ width: '52px' }} readonly disabled

                            value={(countryCode ? countryCode : '+1') || (countryCode === null ? '+1' : countryCode)}


                          ></input>

                          <div className='country-select-dropdown'>
                            <span className='country-select-flag' style={{ backgrouundPosition: '0px -50px' }}></span>
                            <div className='country-select-dowm-arrow-container'>
                              <select className='select-option-of-country-select' value={countryCode ? countryCode : '+1'} onChange={e => { setCountryCode(e.target.value); handleChangeSession(e) }} name='countryCode'>

                                <option >+1</option>
                                <option >+91</option>
                                <option>+93</option>

                              </select>
                              <div className='country-select-dowm-arrow'><i class="fa-solid fa-angle-down"></i></div>
                            </div>
                          </div>
                        </div>) : ('')}





                    </div>
                  </div>
                </div>


                <div className='profile-outer-container'>
                  <div className='profile-inner-container second-inner-container'>
                    <div className='profile-innermost-container innermost-input-profile-container container-js'>
                      <label className='profile-label'>Birthdate: </label>

                      <input disabled className='profile-input input-js' placeholder name='birthdate' type='text' readonly
                        value={birthdate} onChange={e => { setBirthdate(e.target.value); handleChangeSession(e) }}
                        max='9999-12-31'
                      ></input>



                    </div>
                  </div>
                </div>


                <div className='profile-outer-container'>
                  <div className='profile-inner-container second-inner-container'>
                    <div className='profile-innermost-container innermost-input-profile-container container-js'>
                      <label className='profile-label'>Gender:</label>

                      <div className='select-container'>
                        {((typeof edit === 'string') ? (edit === String(true)) : (Boolean(edit) === true)) ? (
                          <select disabled name='gender' id='select-gender' value={gender} readonly className='profile-gender-select input-js' style={{ appearance: 'none' }}>
                            <option className='profile-gender-option' value='none'></option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value='other'>Other</option>
                          </select>
                        ) : (
                          <div style={{ width: '100%' }}>
                            <select disabled name='gender' id='select-gender' readonly className='profile-gender-select input-js' value={gender} onChange={e => { setGender(e.target.value); handleChangeSession(e) }}>

                              <option className='profile-gender-option' ></option>
                              <option value='male'>Male</option>
                              <option value='female'>Female</option>
                              <option value='other'>Other</option>
                            </select>
                            <div className='gender-select-down-arrow-icon-container'>
                              <i class="fa-solid fa-angle-down"></i>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>


                <div className='profile-outer-container2'>
                  <div className='profile-inner-container2 second-inner-container2 profile-inner-container2'>
                    <div className='profile-innermost-container2 innermost-input-profile-container2 container2-js'>
                      <label className='profile-label2 profile-label2-js'>Text: </label>
                      {/* <input disabled className='profile-input input2-js' placeholder name='text' type='text' readonly value={text.replace(/\s|[0-9]/g, '')} onChange={e => { setText(e.target.value); handleChangeSession(e) }}></input> */}
                      <input disabled className='profile-input input2-js' placeholder name='text' type='text' readonly value={text?.replace(/\s|[0-9]/g, '')} onChange={e => { setText(e.target.value); handleChangeSession(e) }}></input>


                      {((typeof edit === 'string') ? (edit === String(false)) : (Boolean(edit) === false)) ? (
                        <div className='edit-version-sub-text-container'>
                          <div className='edit-version-sub-text-icon-container'><i class="fa-regular fa-message sub-text-add-icon"></i></div>
                          <span className='edit-version-sub-text-span'>add Text</span>
                        </div>
                      ) : ('')}
                    </div>
                  </div>
                </div>

                <div className='profile-outer-container2'>
                  <div className='profile-inner-container2 second-inner-container2 profile-inner-container2'>
                    <div className='profile-innermost-container2 innermost-input-profile-container2 container2-js'>
                      <label className='profile-label2 profile-label2-js'>Add Date: </label>

                      <div className='date-container p'>
                        <div className='date-year-container'>
                          <select disabled className='date-select profile-input-date-select input2-js' name='year' value={year} onChange={e => { setYear(e.target.value); handleChangeSession(e) }} >
                          {/* <option className='profile-year-option' ></option> */}
                            <option>1989</option>
                            <option>2000</option>
                            <option>2001</option>
                          </select>
                          {((typeof edit === 'string') ? (edit === String(false)) : (Boolean(edit) === false)) ? (
                            <div className='edit-version-icon-container'>
                              <i class="fa-solid fa-angle-down"></i>
                            </div>
                          ) : ('')}
                        </div>
                        <div className='date-month-container marg-mon month' >
                          <select disabled className='date-select profile-input-date-select input2-js' name='month' value={month} onChange={e => { setMonth(e.target.value); handleChangeSession(e) }}>
                          {/* <option className='profile-month-option' ></option> */}
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                          </select>
                          {((typeof edit === 'string') ? (edit === String(false)) : (Boolean(edit) === false)) ? (
                            <div className='edit-version-icon-container'>
                              <i class="fa-solid fa-angle-down"></i>
                            </div>
                          ) : ('')}
                        </div>
                        <div className='date-day-container day'>
                          <select disabled className='date-select profile-input-date-select input2-js' name='day' value={day} onChange={e => { setDay(e.target.value); handleChangeSession(e) }}>
                          {/* <option className='profile-day-option' ></option> */}
                            <option >10</option>
                            <option >11</option>
                            <option >12</option>  
                          </select>
                          {((typeof edit === 'string') ? (edit === String(false)) : (Boolean(edit) === false)) ? (
                            <div className='edit-version-icon-container'>
                              <i class="fa-solid fa-angle-down"></i>
                            </div>
                          ) : ('')}
                        </div>
                      </div>
                      {((typeof edit === 'string') ? (edit === String(false)) : (Boolean(edit) === false)) ? (
                        <div className='edit-version-sub-text-container'>
                          <div className='edit-version-sub-text-icon-container'><i class="fa-regular fa-message sub-text-add-icon"></i></div>
                          <span className='edit-version-sub-text-span'>add Date</span>
                        </div>
                      ) : ('')}
                    </div>
                  </div>
                </div>




                <div className='profile-outer-container2'>
                  <div className='profile-inner-container2 second-inner-container2 profile-inner-container2 inner-container-time'>
                    <div className='profile-innermost-container2 innermost-input-profile-container2 container2-js'>
                      <label className='profile-label2 profile-label2-js'>Time:</label>



                      <div className='time-container p'>
                        <div className='time-hour-container hour'>
                          <select disabled className='time-select profile-input-time-select input2-js' name='hour' value={hour} onChange={e => { setHour(e.target.value); handleChangeSession(e) }} >
                          {/* <option className='profile-hour-option' ></option> */}
                            <option>03</option>
                            <option>04</option>
                            <option>06</option>
                          </select>
                          {((typeof edit === 'string') ? (edit === String(false)) : (Boolean(edit) === false)) ? (
                            <div className='edit-version-icon-container'>
                              <i class="fa-solid fa-angle-down"></i>
                            </div>
                          ) : ('')}
                        </div>
                        <div className='time-minute-container minute marg-min-container'>
                          <select disabled className='time-select profile-input-time-select input2-js' name='minute' value={minute} onChange={e => { setMinute(e.target.value); handleChangeSession(e) }} >
                          {/* <option className='profile-minute-option' ></option> */}
                            <option>40</option>
                            <option>10</option>
                            <option>20</option>
                          </select>
                          {((typeof edit === 'string') ? (edit === String(false)) : (Boolean(edit) === false)) ? (
                            <div className='edit-version-icon-container'>
                              <i class="fa-solid fa-angle-down"></i>
                            </div>
                          ) : ('')}
                        </div>
                      </div>
                      {((typeof edit === 'string') ? (edit === String(false)) : (Boolean(edit) === false)) ? (
                        <div className='edit-version-sub-text-container'>
                          <div className='edit-version-sub-text-icon-container'><i class="fa-regular fa-message sub-text-add-icon"></i></div>
                          <span className='edit-version-sub-text-span'>add Time</span>
                        </div>
                      ) : ('')}
                    </div>
                  </div>
                </div>

                <div>
                  <div className='profile-outer-container outer-container-btn'>


                    {((typeof edit === 'string') ? (edit === String(true)) : Boolean(edit) === true) ?
                      (
                        <div className='second-inner-container'>
                          <button className='profile-btn' onClick={handleEditNew} type='button' name='edit'>Edit</button>

                        </div>
                      ) : (
                        <div className='second-inner-container'>
                          <button className='profile-btn-cancel' name='cancel' type='button' onClick={(e) => { handleCancleButton(e); }}>Cancle</button>
                          <input type='submit' value='Save' className='profile-btn'></input>
                        </div>
                      )}


                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )




}

export default memo(ProfileCompo)
