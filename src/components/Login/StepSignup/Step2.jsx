import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";
export default function Step2({ handleBackStep, setFormData }) {
  const [genders, setGenders] = useState([]);
  const api = import.meta.env.VITE_API_LOCAL_BACKEND;
  function gender() {
    try {
      axios.get(`${api}gender`).then((res) => {
        setGenders(res.data);
      })
    } catch {
      console.error()
    }

  }

  useEffect(() => {
    gender();
  })
  const [selectedGender, setSelectedGender] = useState(null);
  const handleGenderSelect = (id) => {
    setSelectedGender(id);
    setFormData(prevFormData => ({
      ...prevFormData,
      gender: {
        ...prevFormData.gender,
        id: id
      }
    }))
  };

  const onChageName = (e) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      userName: e.target.value
    }))
  }
  const [birth, setBirth] = useState({
    day:'',
    month:'',
    year:''
  })
  const handleInputBirth = (e) => {
    var day = birth.day.padStart(2,'0');
    var month=birth.month.padStart(2,'0');
    var year = birth.year.padStart(2,'0');

    switch (e.target.name) {
      case 'day':
        setBirth(prevBirth =>({
          ...prevBirth,
          day: e.target.value
        }))
        day = e.target.value.padStart(2,'0')
        break;
      case 'month':
        setBirth(prevBirth =>({
          ...prevBirth,
          month: e.target.value
        }))
        month = e.target.value.padStart(2,'0')
        break;
      case 'year':
        setBirth(prevBirth =>({
          ...prevBirth,
          year: e.target.value
        }))
        year = e.target.value
        break;
    }

    const birthday = `${year}-${month}-${day}`;
    setFormData(prevFormData => ({
      ...prevFormData,
      birthday: birthday
    }));
  }

  return (
    <div className='flex justify-center w-full pb-0'>
      <div className='step-w '>
        <div>
          <div className='flex items-center'>
            <div className='flex justify-center items-center w-arrstep'>
              <button onClick={handleBackStep} className='hover-sidebar'>
                <IoIosArrowBack className='min-h-8 min-w-8' />
              </button>
            </div>
            <div className='flex flex-col'>
              <span className=' element-sidebar'>Step 2 of 2</span>
              <span className='font-bold text-base'>Tell us about yourself</span>
            </div>
          </div>
          <div className='step-w flex justify-center '>
            <div className='signup-form-1'>
              <div className='mt-6'>
                <div className='mb-2 flex flex-col'>
                  <label htmlFor="name" className='font-bold text-sm'>Name</label>
                  <span className='text-sm element-sidebar'>This name will appear on your profile</span>
                </div>
                <div className='input-border '>
                  <input name='name' onChange={onChageName} type="text" id="name" className="inline-full py-3 px-4 text-base secondary_bg" />
                </div>
              </div>
              <div className='mt-6'>
                <div className='mb-2 flex flex-col'>
                  <label className='font-bold text-sm'>Date of birth</label>
                  <span className='text-sm element-sidebar'>
                    Why do we need your date of birth? <a className=' underline' href='https://www.spotify.com/vn-vi/legal/end-user-agreement/'>Learn more.</a>
                  </span>
                </div>
                <div className='flex gap-2'>
                  <div className='input-border w-1/5'>
                    <input name='day' onChange={handleInputBirth} type="number" className="inline-full py-3 px-4 text-base secondary_bg text-center" placeholder='dd' />
                  </div>
                  <div className='input-border w-3/5'>
                    <select name='month' onChange={handleInputBirth} type="text" className="inline-full py-3 px-4 text-base secondary_bg">
                      <option value={0}>Month</option>
                      <option value={1}>January</option>
                      <option value={2}>February</option>
                      <option value={3}>March</option>
                      <option value={4}>April</option>
                      <option value={5}>May</option>
                      <option value={6}>Jun</option>
                      <option value={7}>July</option>
                      <option value={8}>August</option>
                      <option value={9}>Septemper</option>
                      <option value={10}>October</option>
                      <option value={11}>November</option>
                      <option value={12}>December</option>
                    </select>
                  </div>
                  <div className='input-border w-1/4'>
                    <input onChange={handleInputBirth} name='year' type="number" className="inline-full py-3 px-4 text-base secondary_bg text-center" placeholder='yyyy' />
                  </div>
                </div>

              </div>
              <div className='mt-6'>
                <div className='mb-2 flex flex-col'>
                  <label htmlFor="gender" className='font-bold text-sm'>Gender</label>
                  <span className='text-sm element-sidebar'>We use your gender to help personalize our content recommendations and ads for you.</span>
                </div>
                <div className='flex flex-wrap gap-2'>
                  {genders.map(item => (
                    <div
                      key={item.id}
                      className={`hover-radio ${selectedGender === item.id ? 'selected' : ''}`}
                      onClick={() => handleGenderSelect(item.id)}
                    >
                      <button
                        className='hover-input cursor-default'
                        id={item.gender}
                        value={item.id}
                        readOnly
                      >
                        {selectedGender === item.id ?
                          <FaCircleDot className='bg-choose' /> : <FaRegCircle className='bg-radio' />
                        }
                      </button>
                      <label className='px-3' htmlFor={item.gender}>{item.gender}</label>
                    </div>
                  ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
