// import React, { useState } from 'react';

// function GroupForm(props) {

//     const [state, setState] = useState({
//         groupname: '',
//         grouptype: '',
//         firstname: '',
//         surname: '',
//         email: '',
//         phone: '',
//         arrival: '',
//         departure: '',
//         estarrival: '',
//         malesunder14: '',
//         femalesunder14: '',
//         males14to17: '',
//         females14to17: '',
//         males18plus: '',
//         females18plus: '',
//         malesupers: '',
//         femalesupers: '',
//         superscabin: '',
//         supersbedroom: '',
//         groupgender: '',
//         supersbunks: '',
//         drivercabin: '',
//         sharecabin: '',
//         supersgender: '',
//         oneperbed: '',
//         groupbunks: '',
//         comments: '',
//     });

//     function handleSubmit(event) {
//         event.preventDefault();
//         fetch('http://localhost:9000/group-form', { method: 'POST', body: JSON.stringify(state), headers: { 'Content-Type': 'application/json' }});
//     }

//     function handleChange(event) {
//         setState(
//             {
//                 ...state,
//                 [event.target.name]: event.target.value
//             }
//         );
//     }

//     function dropdownOptions() {
//         return (
//             [...Array(10).keys()].map((num) => {
//                 return (
//                     <option value={num}>{num}</option>
//                 )
//             })
//         )
//     }

//     return (
//         <div>
//             <form onSubmit={ handleSubmit }>
//                 <label for='groupname'>Group, School or Company Name</label><br />
//                 <input type='text' id='groupname' name='groupname' value={ state.groupname } onChange={ handleChange }/><br />
//                 <label for='grouptype'>Type of group</label><br />
//                 <input type='text' id='grouptype' name='grouptype' value={ state.grouptype } onChange={ handleChange }/><br />
//                 <label for='firstname'>First Name</label><br />
//                 <input type='text' id='fistname' name='firstname' value={ state.firstname } onChange={ handleChange }/><br />
//                 <label for='surname'>Surname</label><br />
//                 <input type='text' id='surname' name='surname' value={ state.surname } onChange={ handleChange }/><br />
//                 <label for='email'>Email address</label><br />
//                 <input type='text' id='email' name='email' value={ state.email } onChange={ handleChange }/><br />
//                 <label for='phone'>Mobile phone</label><br />
//                 <input type='text' id='phone' name='phone' value={ state.phone } onChange={ handleChange }/><br />
//                 <label for='arrival'>Arrival date</label><br />
//                 <input type='text' id='arrival' name='arrival' value={ state.arrival } onChange={ handleChange }/><br />
//                 <label for='departure'>Departure date</label><br />
//                 <input type='text' id='departure' name='departure' value={ state.departure } onChange={ handleChange }/><br />
//                 <label for='estarrival'>Estimated arrival time</label><br />
//                 <input type='text' id='estarrival' name='estarrival' value={ state.estarrival } onChange={ handleChange }/><br />
//                 <h3>Number of group members (exclude supervisors)</h3>
//                 <label for='malesunder14'>{'Males < 14 yrs'}</label><br />
//                 <select id='malesunder14' name='malesunder14' onChange={ handleChange } value={ state.malesunder14 }>
//                     {
//                         dropdownOptions()
//                     }
//                 </select><br />
//                 <label for='femalesunder14'>{'Females < 14 yrs'}</label><br />
//                 <select id='femalesunder14' name='femalesunder14' onChange={ handleChange } value={ state.femalesunder14 }>
//                     {
//                         dropdownOptions()
//                     }
//                 </select><br />
//                 <label for='males14to17'>{'Males 14 - 17 yrs'}</label><br />
//                 <select id='males14to17' name='males14to17' onChange={ handleChange } value={ state.males14to17 }>
//                     {
//                         dropdownOptions()
//                     }
//                 </select><br />
//                 <label for='females14to17'>{'Females 14 - 17 yrs'}</label><br />
//                 <select id='females14to17' name='females14to17' onChange={ handleChange } value={ state.females14to17 }>
//                     {
//                         dropdownOptions()
//                     }
//                 </select><br />
//                 <label for='males18plus'>{'Males 18+ yrs'}</label><br />
//                 <select id='males18plus' name='males18plus' onChange={ handleChange } value={ state.males18plus }>
//                     {
//                         dropdownOptions()
//                     }
//                 </select><br />
//                 <label for='females18plus'>{'Females 18+ yrs'}</label><br />
//                 <select id='females18plus' name='females18plus' onChange={ handleChange } value={ state.females18plus }>
//                     {
//                         dropdownOptions()
//                     }
//                 </select><br />
//                 <h3>Number of supervisors (must be 18+ yrs)</h3>
//                 <label for='malesupers'>Male super's</label><br />
//                 <select id='malesupers' name='malesupers' onChange={ handleChange } value={ state.malesupers }>
//                     {
//                         dropdownOptions()
//                     }
//                 </select><br />
//                 <label for='femalesupers'>Female super's</label><br />
//                 <select id='femalesupers' name='femalesupers' onChange={ handleChange } value={ state.femalesupers }>
//                     {
//                         dropdownOptions()
//                     }
//                 </select><br />
//                 <h3>Accommodation requirements</h3>
//                 <p>Please check the box if the group requires any of the following:</p>
//                 <input type='radio' id='superscabin' name='superscabin' value={ 'superscabin' }onChange={ handleChange } checked={ state.superscabin !== '' }/>
//                 <label for='superscabin'>Supervisors must have their own cabins, separate from the group members</label><br />
//                 <input type='radio' id='supersbedroom' name='supersbedroom' value={ 'supersbedroom' }onChange={ handleChange } checked={ state.supersbedroom !== '' }/>
//                 <label for='supersbedroom'>Supervisors must each have their own bedroom</label><br />
//                 <input type='radio' id='groupgender' name='groupgender' value={ 'groupgender' }onChange={ handleChange } checked={ state.groupgender !== '' }/>
//                 <label for='groupgender'>Group members' cabins must be separated by gender</label><br />
//                 <input type='radio' id='supersbunks' name='supersbunks' value={ 'supersbunks' }onChange={ handleChange } checked={ state.supersbunks !== '' }/>
//                 <label for='supersbunks'>No supervisors in bunk beds</label><br />
//                 <input type='radio' id='drivercabin' name='drivercabin' value={ 'drivercabin' }onChange={ handleChange } checked={ state.drivercabin !== '' }/>
//                 <label for='drivercabin'>Coach driver requires a separate cabin</label><br />
//                 <input type='radio' id='sharecabin' name='sharecabin' value={ 'sharecabin' }onChange={ handleChange } checked={ state.sharecabin !== '' }/>
//                 <label for='sharecabin'>Supervisors can share cabins with the group members provided they are in separate bedrooms</label><br />
//                 <input type='radio' id='supersgender' name='supersgender' value={ 'supersgender' }onChange={ handleChange } checked={ state.supersgender !== '' }/>
//                 <label for='supersgender'>Supervisors' cabins must be separated by gender</label><br />
//                 <input type='radio' id='oneperbed' name='oneperbed' value={ 'oneperbed' }onChange={ handleChange } checked={ state.oneperbed !== '' }/>
//                 <label for='oneperbed'>Only one person in each bed (no sharing of queen beds)</label><br />
//                 <input type='radio' id='groupbunks' name='groupbunks' value={ 'groupbunks' }onChange={ handleChange } checked={ state.groupbunks !== '' }/>
//                 <label for='groupbunks'>No group members in bunk beds</label><br />

//                 <h3>Any additional comments or requests?</h3>
//                 <textarea id='comments' name='comments' rows='6' cols='20' value={ state.comments } onChange={ handleChange }/><br />
//                 <input type='submit' value='Submit'/>
//             </form>
//         </div>
//     );
// }

// export default GroupForm;
