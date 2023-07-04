<template>
  <div class="container form_control">
    <div class="text-center">
      <div class="col-12 mb-5 notice_and_aggrement">
      <h3 class="pagetitle text-start">အကြိုအင်တာဗျူးစစ်ဆေးခြင်း</h3>
      
      
      <!-- Reminder  -->
      <div class="reminder_control mt-5 text-justify">
        <p class="text-justify">သင်၏ကိုယ်ရေးကိုယ်တာအချက်အလက်များကို
<span class="company_name">INTERNATIONAL FOCUS GENERAL SERVICES CO.,LTD</span> မှ လုပ်ငန်း လိုအပ်ချက်အရ သိမ်းဆည်းထားမည်ကို လက်ခံသဘောတူပါသလား။</p>
      </div>
      <!-- User Agreement  -->
      <div class="col-12 agrement_control">
        <label for="agrement" class="col-8 ">လက်ခံသဘောတူပါသည်။</label>
        <input type="checkbox" class="col-3 aggrement_checkbox" v-model="isChecked" />
      </div>
    </div>
  </div>
    <form @submit.prevent="submitForm">
        
      <!-- Upload User Photo Section  -->
      <div class="photo_upload_control">
        <label for="Photo">ဓာတ်ပုံ</label>
        <input type="file" accept="image/*" @change="handleFileUpload" />
        <button class="photo_upload_button" @click="uploadPhoto">
          <i class="fas fa-plus"></i>
          ဓာတ်ပုံတင်ရန်
        </button>
      </div>
      
        <!-- Address Section  -->
        <div class="address_control">
            <label for="address" class="form-label">နေရပ်လိပ်စာ</label>
            <textarea type="text" id="address" rows="3"  class="form-control address_input input_text_box" v-model="address" :disabled="!isChecked"></textarea>  
        </div>
        <!-- Select Region / State Section  -->
        <div class="region_control" >
            <label for="region" class="form-label">တိုင်းဒေသကြီး / ပြည်နယ်</label>
            <select class="form-select" aria-label="Default select example" :disabled="!isChecked">
              <option selected>Open this select menu</option>
              <option value="ayeyarwady">ဧရာဝတီ</option>
              <option value="bago">ပဲခူး</option>
              <option value="chin">ချင်း</option>
              <option value="kachin">ကချင်</option>
              <option value="kayah">ကယား</option>
              <option value="kayin">ကရင်</option>
              <option value="magway">မကွေး</option>
              <option value="mandalay">မန္တလေး</option>
              <option value="mon">မွန်</option>
              <option value="naypyidaw">နေပြည်တော်</option>
              <option value="rakhine">ရခိုင်</option>
              <option value="sagaing">စစ်ကိုင်း</option>
              <option value="shan">ရှမ်း</option>
              <option value="tanintharyi">တနင်္သာရီ</option>
              <option value="yangon">ရန်ကုန်</option>
            </select>
        </div>
        <!-- Body Weight And Height  -->
        <div class="col-12  d-flex weightheight_control">
          <!-- Weight -->
          <div class="col-5  weight_control">
            <div>
              <label for="weight" class="form-label">ကိုယ်အလေးချိန်</label>
            </div>
            <div class="col-12 d-flex">
              <input type="text" class=" col-6 text-center input_number_box" v-model="weight" :disabled="!isChecked" />
              <span class="input-group-text col-4 labels">ပေါင်</span>
            </div>
          </div>
          <!-- Height -->
          <div class="col-7  height_control">
            <div>
              <label for="height" class="form-label">အရပ်အမြင့်</label>
            </div>
            <div class="col-12 d-flex">
              <div class="col-6 d-flex">
                <input type="text" class="col-6 text-center input_number_box" v-model="heightFeet" :disabled="!isChecked" />
                <span class="col-6 input-group-text labels">ပေ</span>
              </div>
              <div class="col-6 d-flex">
                <input type="text" class=" col-8 text-center input_number_box" v-model="heightInches" :disabled="!isChecked" />
                <span class="col-4 input-group-text labels">လက်မ</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Education  -->
        <div class="col-12 education_control">
          <label for="education" class="form-label">ပညာအရည်အချင်း</label>
            <select class="form-select" aria-label="Default select example" :disabled="!isChecked">
              <option selected>Open this select menu</option>
              <option value="grade1">Grade - 1</option>
              <option value="grade2">Grade - 2</option>
              <option value="grade3">Grade - 3</option>
              <option value="grade4">Grade - 4</option>
              <option value="grade5">Grade - 5</option>
              <option value="grade6">Grade - 6</option>
              <option value="grade7">Grade - 7</option>
              <option value="grade8">Grade - 8</option>
              <option value="grade9">Grade - 9</option>
              <option value="grade10">Grade - 10</option>
              <option value="PassedMatric">Passed Matriculation Exam</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="graduated">Grduated</option>
              
            </select>
        </div>
        <!-- Experience  -->
         <div class="experience_control">
            <label for="experience" class="form-label">လုပ်ငန်းအတွေ့အကြုံ</label>
            <textarea type="text" rows="3" id="experience" class="form-control experience_input input_text_box" v-model="experience" :disabled="!isChecked"></textarea>
        </div>
        <!-- Family Tree Documentation  -->
        <div class="col-12 familytree_control" >
          <label class="col-12 form-label">အိမ်ထောင်စု စာရင်း</label>
            <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group" >
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" value="true" v-model="familyTree" :disabled="!isChecked" />
                <label class="btn btn-outline-primary" for="btnradio1">ရှိပါသည်</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" value="false" v-model="familyTree" checked :disabled="!isChecked" />
                <label class="btn btn-outline-primary" for="btnradio2">မရှိပါ</label>
            </div>
        </div>
        <!-- How do you know about this job  -->
        <div class="howdidyouknow_control">
            <label for="howdidyouknow" class="form-label">အလုပ်ခေါ်တာဘယ်လိုသိသလဲ။</label>
            <textarea type="text" rows="3" id="howdidyouknow" class="form-control howdidyouknow_input input_text_box" v-model="howdidyouknow" :disabled="!isChecked"></textarea>
        </div>
        <!-- How do you get contact  -->

         <div class="howdidyoucontact_control">
            <label for="howdidyoucontact" class="form-label">မည်သို့အဆက်အသွယ် ရခဲ့သလဲ။</label>
            <textarea type="text" rows="3" id="howdidyoucontact" class="form-control howdidyoucontact_input input_text_box" v-model="getContact" :disabled="!isChecked"></textarea>
        </div>
        <!-- Phone Number  -->
        <div class="phoneno_control">
          <label for="phoneno" class="form-label">ဖုန်းနံပါတ်</label>
            <div class="col-12 d-flex">
              <span class="col-3 input-group-text text-start phoneno_defaultno" id="">+95</span>
              <input type="text" class="col-9 input_number_box" v-model="phoneNumber" :disabled="!isChecked" />
            </div>
        </div>
       <!-- Have Passport -->
<div class="col-12 havepassport_control">
  <label class="col-12 form-label mb-3">Passport</label>
    <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="havePassport" id="havePassportYes" autocomplete="off"  value="true" v-model="havePassport" :disabled="!isChecked"/>
        <label class="btn btn-outline-primary" for="havePassportYes">ရှိပါသည် </label>

        <input type="radio" class="btn-check" name="havePassport" id="havePassportNo" autocomplete="off" value="false" v-model="havePassport" checked :disabled="!isChecked" />
        <label class="btn btn-outline-primary" for="havePassportNo">မရှိပါ</label>
    </div>
</div>
      <!-- How do you do a passport  -->
      <div class="dopassport_control">
            <label for="dopassport" class="form-label">Passport ဘယ်လိုလုပ်ခဲ့သလဲ။</label>
            <textarea type="text" rows="3" id="dopassport" class="form-control dopassport_input  input_text_box" v-model="dopassport" :disabled="!isChecked"></textarea>
        </div>
      <!-- Passport Cost -->
      <div class="passportcost_control">
            <div>
              <label for="passportcost" class="form-label">Passport ကုန်ကျစရိတ်</label>
            </div>
            <div class="col-12 d-flex">
              <input type="text" class=" col-10 text-end input_number_box" v-model="passportCost" :disabled="!isChecked" />
              <span class="input-group-text col-4 labels">ကျပ်</span>
            </div>
          </div>
   
<!-- Vaccinated Covid - 19 -->
<div class="col-12 vaccinated_control">
  <label class="col-12 form-label mb-3">Covid-19 ကာကွယ်ဆေး</label>
    <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="covidVaccinated" id="covidVaccinatedYes" autocomplete="off" value="true" v-model="vaccinated" :disabled="!isChecked"/>
        <label class="btn btn-outline-primary" for="covidVaccinatedYes">ထိုးထားပါသည်</label>

        <input type="radio" class="btn-check" name="covidVaccinated" id="covidVaccinatedNo" autocomplete="off" value="false" v-model="vaccinated" checked :disabled="!isChecked" />
        <label class="btn btn-outline-primary" for="covidVaccinatedNo">မထိုးထားပါ</label>
    </div>
</div>
<!-- Color Blind -->
<div class="col-12 colorblind_control">
  <label class="col-12 form-label mb-3">ရောင်ကာလာခွဲခြားနိုင်ခြင်း</label>
    <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="colorBlind" id="colorBlindYes" autocomplete="off" value="true" v-model="colorBlind" :disabled="!isChecked" />
        <label class="btn btn-outline-primary" for="colorBlindYes">ရှိပါသည် </label>

        <input type="radio" class="btn-check" name="colorBlind" id="colorBlindNo" autocomplete="off" value="false" v-model="colorBlind" checked :disabled="!isChecked" />
        <label class="btn btn-outline-primary" for="colorBlindNo">မရှိပါ</label>
    </div>
</div>

<!-- English Skill -->
<div class="col-12 englishskill_control">
  <label class="col-12 form-label mb-3">အင်္ဂလိပ်စာ အရည်အချင်း</label>
    <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="englishSkill" id="englishSkillYes" autocomplete="off" value="true" v-model="englishSkill" :disabled="!isChecked" />
        <label class="btn btn-outline-primary" for="englishSkillYes">ရှိပါသည်</label>

        <input type="radio" class="btn-check" name="englishSkill" id="englishSkillNo" autocomplete="off" value="false" v-model="englishSkill" checked :disabled="!isChecked" />
        <label class="btn btn-outline-primary" for="englishSkillNo">မရှိပါ</label>
    </div>
</div>
<!-- Math Skill -->
<div class="col-12 mathskill_control">
  <label class="col-12 form-label mb-3">သင်္ချာအပေါင်း/အနှုတ် အရည်အချင်း</label>
    <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="mathSkill" id="mathSkillYes" autocomplete="off" value="true" v-model="mathSkill" :disabled="!isChecked" />
        <label class="btn btn-outline-primary" for="mathSkillYes">ရှိပါသည်</label>

        <input type="radio" class="btn-check" name="mathSkill" id="mathSkillNo" autocomplete="off" value="false" v-model="mathSkill" checked :disabled="!isChecked" />
        <label class="btn btn-outline-primary" for="mathSkillNo">မရှိပါ</label>
    </div>
</div>
<!-- Can Wait -->
<div class="col-12 canwait_control">
  <label class="col-12 form-label mb-3">ကြာချိန်စောင့်ဆိုင်းနိုင်ခြင်း</label>
  <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
    <input type="radio" class="btn-check" name="canWait" id="canWaitYes" autocomplete="off" value="true" v-model="canWait" :disabled="!isChecked" />
    <label class="btn btn-outline-primary" for="canWaitYes">ရှိပါသည်</label>

    <input type="radio" class="btn-check" name="canWait" id="canWaitNo" autocomplete="off" value="false" v-model="canWait" checked :disabled="!isChecked" />
    <label class="btn btn-outline-primary" for="canWaitNo">မရှိပါ</label>
  </div>
</div>
<!-- Have Relatives -->
<div class="col-12 haverelatives_control">
  <label class="col-12 form-label mb-3">သွားရောက်လုပ်ကိုင်မည့်‌နေရာတွင် အဆက်အသွယ်/ဆွေမျိုးများ</label>
    <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="haveRelatives" id="haveRelativesYes" autocomplete="off" value="true" v-model="haveRelatives" :disabled="!isChecked" />
        <label class="btn btn-outline-primary" for="haveRelativesYes">ရှိပါသည်</label>

        <input type="radio" class="btn-check" name="haveRelatives" id="haveRelativesNo" autocomplete="off" value="false" v-model="haveRelatives" checked :disabled="!isChecked" />
        <label class="btn btn-outline-primary" for="haveRelativesNo">မရှိပါ</label>
    </div>
</div>
<!-- Have Foreign Experience -->
<div class="col-12 haveforeignexperience_control">
  <label class="col-12 form-label mb-3">ပြည်ပနိုင်ငံများသို့ သွားရောက်အလုပ်လုပ်ကိုင်ထားခြင်း</label>
    <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="haveForeignExperience" id="haveForeignExperienceYes" autocomplete="off" value="true" v-model="foreignExp" :disabled="!isChecked" />
        <label class="btn btn-outline-primary" for="haveForeignExperienceYes">ရှိပါသည်</label>

        <input type="radio" class="btn-check" name="haveForeignExperience" id="haveForeignExperienceNo" autocomplete="off" value="false" v-model="foreignExp" checked :disabled="!isChecked" />
        <label class="btn btn-outline-primary" for="haveForeignExperienceNo">မရှိပါ</label>
    </div>
</div>
<!-- Have to Pay Money for That Job -->
<div class="col-12 bribe_control">
  <label class="col-12 form-label mb-3">အလုပ်ရှာဖွေရာတွင် တစ်စုံတစ်ယောက်အား အခကြေးငွေ ပေးခဲ့ရခြင်း</label>
    <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="haveToBribe" id="haveToBribeYes" autocomplete="off" value="true" v-model="bribe"  :disabled="!isChecked"/>
        <label class="btn btn-outline-primary" for="haveToBribeYes">ရှိပါသည်</label>

        <input type="radio" class="btn-check" name="haveToBribe" id="haveToBribeNo" autocomplete="off" value="false" v-model="bribe" checked :disabled="!isChecked" />
        <label class="btn btn-outline-primary" for="haveToBribeNo">မရှိပါ</label>
    </div>
</div>

<!-- Submit and Cancel Btn Section  -->
<div class="col-12 mt-5 d-flex text-center submitbtn_control">
  <div class="col-5  btn cancelbtn">
    <button class=" btn btn-outline-danger">ပယ်ဖျက်မည်</button>
  </div>
  <div class="col-1"></div>
  <div class="col-5 btn  submitbtn">
    <button type="submit" class="btn btn-outline-primary">ရှေ့ဆက်မည်</button>
  </div>
</div>

    </form>
  </div>
</template>

<script>

import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup(){
    const store = useStore();
    const isChecked = ref(false);

    const address = ref('');
    const weight = ref('');
    const heightFeet = ref('');
    const heightInches = ref('');
    const experience = ref('');
    const familyTree = ref('');
    const howdidyouknow = ref('');
    const getContact = ref('');
    const phoneNumber = ref('');
    const dopassport = ref('');
    const passportCost = ref('');
    const canWait = ref('');
    const haveRelatives = ref('');
    const havePassport = ref('');
    const vaccinated = ref('');
    const colorBlind = ref('');
    const englishSkill = ref('');
    const mathSkill = ref('');
    const foreignExp = ref('');
    const bribe = ref('');
    const router = useRouter();
    const submitForm = () =>{
     
      store.dispatch('cvform/updateAddress', address.value);
      store.dispatch('cvform/updateWeight', weight.value);
      store.dispatch('cvform/updateHeightFeet', heightFeet.value);
      store.dispatch('cvform/updateHeightInches', heightInches.value);
      store.dispatch('cvform/updateExperience', experience.value);
      store.dispatch('cvform/updateHowDidYouKnow', howdidyouknow.value);
      store.dispatch('cvform/updateGetContact', getContact.value);
      store.dispatch('cvform/updatePhoneNo', phoneNumber.value);
      store.dispatch('cvform/updateHowYouGetPassport', dopassport.value);
      store.dispatch('cvform/updatePassportCost', passportCost.value);
      store.dispatch('cvform/updateFamilyTree', familyTree.value);
      store.dispatch('cvform/updateCanWait', canWait.value);
      store.dispatch('cvform/updateHaveRelatives' , haveRelatives.value);
      store.dispatch('cvform/updateHavePassport', havePassport.value);
      store.dispatch('cvform/updateVaccinated', vaccinated.value);
      store.dispatch('cvform/updateColorBlind', colorBlind.value);
      store.dispatch('cvform/updateEnglishSkill', englishSkill.value);
      store.dispatch('cvform/updateMathSkill', mathSkill.value);
      store.dispatch('cvform/updateForeignExp', foreignExp.value);
      store.dispatch('cvform/updateBribe', bribe.value);

      console.log("Can Wait Value - ", canWait.value);

      router.push('/checkcvinfo');
    }
    
    return{
      isChecked,
      submitForm,
      address,
      weight,
      heightFeet,
      heightInches,
      experience,
      familyTree,
      howdidyouknow,
      getContact,
      phoneNumber,
      dopassport,
      passportCost,
      canWait,
      haveRelatives,
      havePassport,
      vaccinated,
      colorBlind,
      englishSkill,
      mathSkill,
      foreignExp,
      bribe

    }
  }
}

</script>

<style scoped>

body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }

  .notice_and_aggrement{
    /* margin-top: 3rem; */
    
  }

.form_control {
  margin-top: 3%;
    width: 370px;
    /* height: 400vh; */
    /* border: 1px solid blue; */
    padding: 3rem;

    /* display: flex; */
    justify-content: center;
    align-items: center;
}

form > div{
  margin-bottom: 1.5rem;
}

.pagetitle{
  text-align: center;
  color: blue;
}

.aggrement_checkbox{
  margin-top: 10px;
  margin-left: 30px !important;
  border: 10px solid black !important;
  width: 20px;
  height: 20px;
}

.company_name{
  color: blue;
}

.photo_upload_control {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    padding: 1rem;
    border-radius: 15px;
    background-color: #f5f5f5;
  }

  .photo_upload_control label {
    font-size: 18px;
    font-weight: bold;
  }

  .photo_upload_control input[type="file"] {
    display: none;
  }

  .photo_upload_button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    background-color: #0000FF;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  .photo_upload_button:hover {
    background-color: #0000DD;
  }

  .photo_upload_button i {
    margin-right: 5px;
  }

form > div > .input_text_box{
  /* height: 200px; */
  background-color: #f5f5f5;
}

.input_number_box{
  background-color: #f5f5f5;
  display: block;
  /* width: 100%; */
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  /* color: #495057;
  background-color: #fff; */
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.labels{
  border: none;
  background-color: transparent;
}

.phoneno_defaultno{
  background-color: #fff !important;
}
</style>