import './profile.css'
import React, { useEffect, memo } from 'react'
// import NavbarMobileCompo from '../Sidebar/NavbarMobileCompo'
import NavbarMobileCompo from 'sidebar/NavbarMobileCompo';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { profileCancel, profileEdit, profileEditBirthdate, profileEditContactNumber, profileEditCountryCode, profileEditDay, profileEditEmail, profileEditFirstName, profileEditGender, profileEditHour, profileEditLastName, profileEditMinute, profileEditMonth, profileEditState, profileEditText, profileEditYear, profileSave, setTempStoreLocal } from '../redux/actions/ProfileAction';


const ProfileCompoRedux = ({ dataFromSidebar, dataFromProfileCallback, handleProfileMobile }) => {

    const dispatch = useDispatch();

    const data = useSelector((state) => {
        // &&& HERE &&&
        return state.profile


        

        // return state
    })
console.log("DATA FROM PROFILE:", data);

    const [edit, setEdit] = useState(localStorage.getItem('editState'));



    // ------------------------------- start of mobile view sidebar to appear ---------------------------------------------
    const profileOutermostContainer = document.querySelector('.profile-outermost-container');


    // &&& HERE &&&
    // &&& HERE &&& activate below useEffect line of code to dynamically increase height of sidebar
    // useEffect(() => {

    //     dataFromProfileCallback(profileOutermostContainer);

    // }, [dataFromProfileCallback])

    const ClickedMe = (e) => {
        e.preventDefault();

        const profileOutermostContainer = document.getElementsByClassName('profile-outermost-container');

        profileOutermostContainer[0].classList.add('not-visible-profile');
        dataFromSidebar.classList.add('sidebar-main-mobile');
    }
    // ------------------------------- end of mobile view sidebar to appear ---------------------------------------------


    //   THIS IS RESPONSIBLE FOR PRESERVING RESUME FORM FILL
    useEffect(() => {

        dispatch(profileEditState(localStorage.getItem('editState')))

        if(localStorage.getItem('tempStoreLocal') === 'undefined'){
            localStorage.setItem('tempStoreLocal', JSON.stringify({}));
        }

        // if(localStorage.getItem('tempStoreLocal') !== undefined){

            const savedLocalData = JSON.parse(localStorage.getItem('tempStoreLocal'));
        // }


        if (data.editState === false || data.editState === String(false)) {

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
                            dispatch(profileEditBirthdate(savedLocalData.birthdate))
                        }
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
                            dispatch(profileEditContactNumber(savedLocalData.phone))

                        } else if (savedLocalData.countryCode) {
                            dispatch(profileEditCountryCode(savedLocalData.countryCode))
                        }
                    }


                } else if (inputProfile[i].tagName === 'SELECT') {



                    inputProfile[i].classList.remove('profile-gender-select');
                    inputProfile[i].classList.add('added-gender-select');

                    inputProfile[i].removeAttribute('disabled');
                    inputProfile[i].removeAttribute('readonly');

                    if (savedLocalData) {
                        if (savedLocalData.gender) {
                            dispatch(profileEditGender(savedLocalData.gender))
                        }
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
                                dispatch(profileEditFirstName(savedLocalData.first_name))

                            }

                        }
                    } else if (inputProfile[i].name === 'last_name') {

                        if (savedLocalData) {

                            if (savedLocalData.last_name) {
                                dispatch(profileEditLastName(savedLocalData.last_name))
                            }
                        }
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

                if (savedLocalData) {
                    if (savedLocalData.text) {
                        dispatch(profileEditText(savedLocalData.text))
                    }
                }


                if (inputProfile2[i + 3].type === 'file') {

                    fileInput[0].classList.add('edit-version-added-file-input');
                    fileInput[0].classList.remove('file-input');
                    fileInput[0].classList.add('added-profile-input');


                    fileContainer[0].classList.add('edit-version-file-input-container')
                    fileContainer[0].classList.remove('file-input-container');
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
                                dispatch(profileEditYear(savedLocalData.year))
                            }
                            if (savedLocalData.month) {
                                dispatch(profileEditMonth(savedLocalData.month))
                            }
                            if (savedLocalData.day) {
                                dispatch(profileEditDay(savedLocalData.day))
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

                                dispatch(profileEditHour(savedLocalData.hour))
                            }
                            if (savedLocalData.minute) {
                                 

                                dispatch(profileEditMinute(savedLocalData.minute))
                            }
                        } else {
                            if (timeSelect[k].name === 'hour') {

                            }
                            if (timeSelect[k].name === 'minute') {

                            }
                        }
                    }
                }


            }
        }


    }, [data?.editState])








    const container = document.getElementsByClassName('container-js');
    const label = document.getElementsByClassName('profile-label');
    const label2 = document.getElementsByClassName('profile-label2-js');
    const inputProfile = document.getElementsByClassName('input-js');
    const inputProfile2 = document.getElementsByClassName('input2-js');





    const dateSelect = document.getElementsByClassName('date-select');
    const timeSelect = document.getElementsByClassName('time-select');
    const fileInput = document.getElementsByClassName('file-js');
    const fileContainer = document.getElementsByClassName('file-container');
    const container2 = document.getElementsByClassName('container2-js');


    const handleCancleButton = (e) => {
        e.preventDefault();



        data.editState = true

        dispatch(profileCancel(data))
         


        if (typeof edit === 'string') {
            var editNew = true;
        } else {
            var editNew = !edit
        }
        setEdit(editNew);


        if (data.editState === true || data.editState === String(true)) {



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


                } else if (inputProfile[i].type === 'tel') {
                     ;
                    inputProfile[i].style.setProperty('padding-left', '');
                    inputList.add('profile-input');
                    inputList.remove('added-contact-input');
                    inputList.remove('added2-contact-input');
                    inputProfile[i].setAttribute('disabled', true);
                    inputProfile[i].setAttribute('readonly', true);

                } else if (inputProfile[i].tagName === 'SELECT') {
                    inputList.remove('added-gender-select');
                    inputList.add('profile-gender-select');
                    inputProfile[i].setAttribute('disabled', true);
                    inputProfile[i].setAttribute('readonly', true);

                }
                else {
                    inputList.remove('added-profile-input');
                    inputList.add('profile-input');
                    inputProfile[i].setAttribute('disabled', true);
                    inputProfile[i].setAttribute('readonly', true);

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

                if (inputProfile2[i + 3].type === 'file') {



                    fileInput[0].classList.remove('edit-version-added-file-input');
                    fileInput[0].classList.add('file-input');
                    fileInput[0].classList.remove('added-profile-input');


                    fileContainer[0].classList.remove('edit-version-file-input-container')
                    fileContainer[0].classList.add('file-input-container');
                }


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


        // &&& HERE &&&
        // localStorage.removeItem('tempStoreLocal');
        data.tempStoreLocal = {}
        


        // &&& HERE &&&
        handleProfileMobile();
    }




    const handleSubmit = (e) => {
        e.preventDefault();

        if (data.contactNumber.length > 10 || data.contactNumber.length < 10) {
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
                autoClose: 800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",


                onClose: () => {




                    const callingVar = true;
                    setEdit(callingVar);


                    if (data.editState === true || data.editState === String(true)) {

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



                            } else if (inputProfile[i].type === 'tel') {
                                
                                inputProfile[i].style.setProperty('padding-left', '');
                                inputList.add('profile-input');
                                inputList.remove('added-contact-input');
                                inputList.remove('added2-contact-input');
                                inputProfile[i].setAttribute('disabled', true);
                                inputProfile[i].setAttribute('readonly', true);

                            } else if (inputProfile[i].tagName === 'SELECT') {
                                inputList.remove('added-gender-select');
                                inputList.add('profile-gender-select');
                                inputProfile[i].setAttribute('disabled', true);
                                inputProfile[i].setAttribute('readonly', true);

                            }
                            else {
                                inputList.remove('added-profile-input');
                                inputList.add('profile-input');
                                inputProfile[i].setAttribute('disabled', true);
                                inputProfile[i].setAttribute('readonly', true);

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



                            if (inputProfile2[i + 3].type === 'file') {



                                fileInput[0].classList.remove('edit-version-added-file-input');
                                fileInput[0].classList.add('file-input');
                                fileInput[0].classList.remove('added-profile-input');


                                fileContainer[0].classList.remove('edit-version-file-input-container')
                                fileContainer[0].classList.add('file-input-container');


                            }


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





                    // &&& HERE &&&
                    // localStorage.removeItem('tempStoreLocal');

                    data.tempStoreLocal = {}

                    // &&& HERE &&&
                    handleProfileMobile();
                }

            }
            );
        }

        data.editState = true;

        dispatch(profileSave(data));

    }

    const handleChangeSession = (e) => {
        e.preventDefault();
        const { value, name } = e.target;
        dispatch(setTempStoreLocal({ value, name }))
    }
    useEffect(() => {
        localStorage.setItem('tempStoreLocal', JSON.stringify(data.tempStoreLocal));
    }, [data?.tempStoreLocal])


    const handleEditNew = (e) => {
        e.preventDefault();
        
        data.editState = false

        dispatch(profileEdit(data))

        const newEdit = !edit;
        setEdit(newEdit)

        if (Boolean(data.editState) === false || data.editState === String(false)) {



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





                } else if (inputProfile[i].type === 'tel') {
                    const inputList = inputProfile[i].classList;


                    inputProfile[i].style.setProperty('padding-left', '42px');
                    inputList.remove('profile-input');
                    inputList.add('added-contact-input');
                    inputList.add('added2-contact-input');


                    inputProfile[i].removeAttribute('disabled');
                    inputProfile[i].removeAttribute('readonly');





                } else if (inputProfile[i].tagName === 'SELECT') {



                    inputProfile[i].classList.remove('profile-gender-select');
                    inputProfile[i].classList.add('added-gender-select');

                    inputProfile[i].removeAttribute('disabled');
                    inputProfile[i].removeAttribute('readonly');





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
                    if (inputProfile[i].name === 'email') {
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





                if (inputProfile2[i + 3].type === 'file') {

                    fileInput[0].classList.add('edit-version-added-file-input');
                    fileInput[0].classList.remove('file-input');
                    fileInput[0].classList.add('added-profile-input');


                    fileContainer[0].classList.add('edit-version-file-input-container')
                    fileContainer[0].classList.remove('file-input-container');



                }
                if (inputProfile2[i].tagName === 'SELECT' && inputProfile2[i].classList.contains('date-select')) {


                    for (let j = 0; j < dateSelect.length; j++) {
                        const dateList = dateSelect[j].classList;

                        dateList.add('edit-version-added-date-select');
                        dateList.add('edit-version-added-profile-input-date-select');
                        dateList.add('edit-version-new-date-select');

                        dateSelect[j].removeAttribute('disabled');
                        dateSelect[j].removeAttribute('readonly');


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
                                            <input disabled id='first_name' className='profile-input input-js' placeholder name='first_name' type='text' readonly value={data?.firstName} onChange={e => {
                                                dispatch(profileEditFirstName(e.target.value))
                                                handleChangeSession(e);
                                            }}></input>

                                        </div>

                                    </div>
                                </div>


                                <div className='profile-outer-container'>
                                    <div className='profile-inner-container second-inner-container'>
                                        <div className='profile-innermost-container innermost-input-profile-container container-js'>
                                            <label className='profile-label'>Last Name:</label>
                                            <input disabled className='profile-input input-js' placeholder name='last_name' type='text' readonly value={data?.lastName} onChange={e => {
                                                dispatch(profileEditLastName(e.target.value))
                                                handleChangeSession(e)
                                            }}></input>

                                        </div>
                                    </div>
                                </div>

                                <div className='profile-outer-container'>
                                    <div className='profile-inner-container second-inner-container'>
                                        <div className='profile-innermost-container innermost-input-profile-container container-js'>
                                            <label className='profile-label'>Email:</label>
                                            <input disabled className='profile-input input-js' placeholder name='email' type='email' readonly value={data?.email}></input>

                                        </div>
                                    </div>
                                </div>

                                <div className='profile-outer-container'>
                                    <div className='profile-inner-container second-inner-container'>
                                        <div className='profile-innermost-container innermost-input-profile-container container-js'>
                                            <label className='profile-label'>Contact number:</label>

                                            <input disabled className='profile-input input-js' placeholder name='phone' type='tel' readonly

                                                value={((typeof edit === 'string') ? (edit === String(true)) : (Boolean(edit) === true)) ? `${data?.countryCode} ${data?.contactNumber}` : data?.contactNumber?.replace(/([a-zA-Z])/g, "")}
                                                // value={((typeof data.editState === 'string') ? (data.editState === String(true)) : (Boolean(data.editState) === true)) ? `${data.countryCode} ${data.contactNumber}` : data.contactNumber.replace(/([a-zA-Z])/g, "")}
                                                onChange={e => {
                                                    dispatch(profileEditContactNumber(e.target.value))
                                                    handleChangeSession(e);
                                                }}></input>

                                            {((typeof edit === 'string') ? (edit === String(false)) : (Boolean(edit) === false)) ? (
                                                // {((typeof data.editState === 'string') ? (data.editState === String(false)) : (Boolean(data.editState) === false)) ? (
                                                <div>
                                                    <input className='contact-inner-input' type='text' style={{ width: '52px' }} readonly disabled
                                                        value={(data?.countryCode ? data?.countryCode : '+1') || (data?.countryCode === null ? '+1' : data?.countryCode )}></input>

                                                    <div className='country-select-dropdown'>
                                                        <span className='country-select-flag' style={{ backgrouundPosition: '0px -50px' }}></span>
                                                        <div className='country-select-dowm-arrow-container'>
                                                            <select className='select-option-of-country-select' value={data?.countryCode ? data?.countryCode : '+1'} onChange={e => {
                                                                dispatch(profileEditCountryCode(e.target.value))
                                                                handleChangeSession(e)
                                                            }} name='countryCode'>

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

                                            <input disabled className='profile-input input-js' max='9999-12-31' placeholder name='birthdate' type='text' readonly
                                                value={data?.birthdate} onChange={e => {
                                                    dispatch(profileEditBirthdate(e.target.value))
                                                    handleChangeSession(e)
                                                }}></input>
                                        </div>
                                    </div>
                                </div>



                                <div className='profile-outer-container'>
                                    <div className='profile-inner-container second-inner-container'>
                                        <div className='profile-innermost-container innermost-input-profile-container container-js'>
                                            <label className='profile-label'>Gender:</label>

                                            <div className='select-container'>
                                                {((typeof edit === 'string') ? (edit === String(true)) : (Boolean(edit) === true)) ? (
                                                    // {((typeof data.editState === 'string') ? (data.editState === String(true)) : (Boolean(data.editState) === true)) ? (
                                                    <select disabled name='gender' id='select-gender' value={data?.gender} readonly className='profile-gender-select input-js' style={{ appearance: 'none' }}>
                                                        <option className='profile-gender-option' value='none'></option>
                                                        <option value='male'>Male</option>
                                                        <option value='female'>Female</option>
                                                        <option value='other'>Other</option>
                                                    </select>
                                                ) : (
                                                    <div style={{ width: '100%' }}>
                                                        <select disabled name='gender' id='select-gender' readonly className='profile-gender-select input-js' value={data?.gender} onChange={e => {
                                                            dispatch(profileEditGender(e.target.value))
                                                            handleChangeSession(e)
                                                        }}>
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
                                            <input disabled className='profile-input input2-js' placeholder name='text' type='text' readonly value={data?.text?.replace(/\s|[0-9]/g, '')} onChange={e => {

                                                dispatch(profileEditText(e.target.value));
                                                handleChangeSession(e)
                                            }}></input>
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
                                                    <select disabled className='date-select profile-input-date-select input2-js' name='year' value={data?.year} onChange={e => {

                                                        handleChangeSession(e)
                                                        dispatch(profileEditYear(e.target.value));
                                                    }}>
                                                        <option value='1989'>1989</option>
                                                        <option value='2000'>2000</option>
                                                        <option value='2001'>2001</option>
                                                    </select>
                                                    {((typeof edit === 'string') ? (edit === String(false)) : (Boolean(edit) === false)) ? (
                                                        <div className='edit-version-icon-container'>
                                                            <i class="fa-solid fa-angle-down"></i>
                                                        </div>
                                                    ) : ('')}
                                                </div>
                                                <div className='date-month-container marg-mon month' >
                                                    <select disabled className='date-select profile-input-date-select input2-js' name='month' value={data?.month} onChange={e => {

                                                        dispatch(profileEditMonth(e.target.value));
                                                        handleChangeSession(e)
                                                    }} >
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
                                                    <select disabled className='date-select profile-input-date-select input2-js' name='day' value={data?.day} onChange={e => {
                                                        dispatch(profileEditDay(e.target.value))
                                                        handleChangeSession(e)
                                                    }} >
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
                                                    <select disabled className='time-select profile-input-time-select input2-js' name='hour' value={data?.hour} onChange={e => {
                                                        dispatch(profileEditHour(e.target.value))
                                                        handleChangeSession(e)
                                                    }}>
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
                                                    <select disabled className='time-select profile-input-time-select input2-js' name='minute' value={data?.minute} onChange={e => {
                                                        dispatch(profileEditMinute(e.target.value))
                                                        handleChangeSession(e)
                                                    }}>

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

export default memo(ProfileCompoRedux)
