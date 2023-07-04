<template>
  

  <div class="container form_control">
    <div class="text-center">
      <div class="col-12 mb-5 notice_and_aggrement">
      <h4 class="pagetitle text-center mb-5">ဖြည့်သွင်းထားသော ကိုယ်ရေးအချက်အလက်များ</h4>
      
      
      <!-- Reminder  -->
      <div class="col-12">
        <p>ဖြည့်သွင်းထားသော ကိုယ်ရေးကိုယ်တာ အချက်အလက်များ မှန်ကန်ခြင်းရှိမရှိ စစ်ဆေးအတည်ပြုပါ။</p>
      </div>
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
    <form @submit.prevent="submitAllData">
      <!-- Address Section  -->
      <div class="address_control">
                  <label for="address" class="form-label">နေရပ်လိပ်စာ</label>
                 <p class="form-control address_value text_value">{{ address }}</p>
        </div>
        <!-- Body Weight And Height  -->
        <div class="col-12  d-flex weightheight_control">
                <!-- Weight -->
                <div class="col-5  weight_control">
                  <div>
                    <label for="weight" class="form-label">ကိုယ်အလေးချိန်</label>
                  </div>
                  <div class="col-12 d-flex">
                    <p class="col-6 mt-4 input_number_box text-start weight_value">{{ weight }}</p>
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
                      <p class="col-6 mt-4 text-start input_number_box height_feet_value">{{ heightFeet }}</p>
                      <span class="col-6 input-group-text labels">ပေ</span>
                    </div>
                    <div class="col-6 d-flex">
                      <p class="col-8 mt-4 text-start input_number_box height_inches_value">{{ heightInches }}</p>
                      <span class="col-4 input-group-text labels">လက်မ</span>
                    </div>
                  </div>
                </div>
        </div>
        <!-- Experience  -->
        <div class="experience_control">
            <label for="experience" class="form-label">လုပ်ငန်းအတွေ့အကြုံ</label>
    
            <p class="form-control experience_value text-start" id="experience">{{ experience }}</p>
        </div>
        <!-- How do you know about this job  -->
        <div class="howdidyouknow_control">
            <label for="howdidyouknow" class="form-label">အလုပ်ခေါ်တာဘယ်လိုသိသလဲ။</label>
            <p class="form-control howdidyouknow_value">{{ howdidyouknow }}</p>
          </div>
        <!-- How do you get contact  -->
         <div class="howdidyoucontact_control">
            <label for="howdidyoucontact" class="form-label">မည်သို့အဆက်အသွယ် ရခဲ့သလဲ။</label>
            <p class="form-control howdidyoucontact_value ">{{ getContact }}</p>
        </div>
        <!-- Phone Number  -->
        <div class="phoneno_control">
          <label for="phoneno" class="form-label">ဖုန်းနံပါတ်</label>
            <div class="col-12 d-flex">
              <span class="col-3 input-group-text text-center phoneno_defaultno" id="">+95</span>
              <p class="col-9 text-start mt-4 input_number_box phoneno_value">{{ phoneNumber }}</p>
            </div>
        </div>
              <!-- Have Passport -->
<div class="col-12 havepassport_control">
  <label class="col-12 form-label mb-3">Passport</label>
    <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="havePassport" id="havePassportYes" autocomplete="off" v-model="havePassport" :value="true">
        <label :class="{'btn': true, 'btn-primary': havePassport}" for="havePassportYes">ရှိပါသည်</label>

        <input type="radio" class="btn-check" name="havePassport" id="havePassportNo" autocomplete="off" v-model="havePassport" :value="false">
        <label :class="{'btn': true, 'btn-primary': !havePassport}" for="havePassportNo">မရှိပါ</label>
    </div>
</div>
         <!-- How do you do a passport  -->
        <div class="dopassport_control">
            <label for="dopassport" class="form-label">Passport ဘယ်လိုလုပ်ခဲ့သလဲ။</label>
            <p class="form-control dopassport_value">{{ dopassport }}</p>
        </div>
        <!-- Passport Cost -->
        <div class="passportcost_control">
            <div>
              <label for="passportcost" class="form-label">Passport ကုန်ကျစရိတ်</label>
            </div>
            <div class="col-12 d-flex">
              <p class="col-10 mt-4 text-center input_number_box passportcost_value"> {{ passportCost }} </p>
              <span class=" input-group-text col-4 labels">ကျပ်</span>
            </div>
        </div>
        <!-- Vaccinated Covid - 19 -->
<div class="col-12 vaccinated_control">
  <label class="col-12 form-label mb-3">Covid-19 ကာကွယ်ဆေး</label>
    <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="covidVaccinated" id="covidVaccinatedYes" autocomplete="off" :value="true" v-model="vaccinated" />
        <label :class="{'btn': true, 'btn-primary': vaccinated}" for="covidVaccinatedYes">ထိုးထားပါသည်</label>

        <input type="radio" class="btn-check" name="covidVaccinated" id="covidVaccinatedNo" autocomplete="off" :value="false" v-model="vaccinated"  />
        <label :class="{'btn': true, 'btn-primary': !vaccinated}" for="covidVaccinatedNo">မထိုးထားပါ</label>
    </div>
</div>
<!-- Color Blind -->
<div class="col-12 colorblind_control">
  <label class="col-12 form-label mb-3">အရောင်ကာလာခွဲခြားနိုင်ခြင်း</label>
    <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="colorBlind" id="colorBlindYes" autocomplete="off" :value="true" v-model="colorBlind" />
        <label :class="{'btn': true, 'btn-primary': colorBlind}" for="colorBlindYes">ရှိပါသည်</label>

        <input type="radio" class="btn-check" name="colorBlind" id="colorBlindNo" autocomplete="off" :value="false" v-model="colorBlind"  />
        <label :class="{'btn': true, 'btn-primary': !colorBlind}" for="colorBlindNo">မရှိပါ</label>
    </div>
</div>
        <!-- English Skill -->
<div class="col-12 englishskill_control">
  <label class="col-12 form-label mb-3">အင်္ဂလိပ်စာ အရည်အချင်း</label>
    <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="englishSkill" id="englishSkillYes" autocomplete="off" :value="true" v-model="englishSkill" />
        <label :class="{'btn': true, 'btn-primary': englishSkill}" for="englishSkillYes">ရှိပါသည်</label>

        <input type="radio" class="btn-check" name="englishSkill" id="englishSkillNo" autocomplete="off" :value="false" v-model="englishSkill"  />
        <label :class="{'btn': true, 'btn-primary': !englishSkill}" for="englishSkillNo">မရှိပါ</label>
    </div>
</div>
<!-- Math Skill -->
<div class="col-12 mathskill_control">
  <label class="col-12 form-label mb-3">သင်္ချာအပေါင်း/အနှုတ် အရည်အချင်း</label>
    <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="mathSkill" id="mathSkillYes" autocomplete="off" :value="true" v-model="mathSkill"  />
        <label :class="{'btn': true, 'btn-primary': mathSkill}" for="mathSkillYes">ရှိပါသည်</label>

        <input type="radio" class="btn-check" name="mathSkill" id="mathSkillNo" autocomplete="off" :value="false" v-model="mathSkill"  />
        <label :class="{'btn': true, 'btn-primary': !mathSkill}" for="mathSkillNo">မရှိပါ</label>
    </div>
</div>
        <!-- Can Wait -->
        <div class="col-12 canwait_control">
            <label class="col-12 form-label mb-3">ကြာချိန်စောင့်ဆိုင်းနိုင်ခြင်း</label>
            <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" class="btn-check" name="canWait" id="canWaitYes" autocomplete="off" v-model="canWait" :value="true">
              <label :class="{'btn': true, 'btn-primary': canWait}" for="canWaitYes">ရှိပါသည်</label>

              <input type="radio" class="btn-check" name="canWait" id="canWaitNo" autocomplete="off" v-model="canWait" :value="false">
              <label :class="{'btn': true, 'btn-primary': !canWait}" for="canWaitNo">မရှိပါ</label>
            </div>
        </div>


        <!-- Have Relatives -->
        <div class="col-12 haverelatives_control">
          <label class="col-12 form-label mb-3">သွားရောက်လုပ်ကိုင်မည့်‌နေရာတွင် အဆက်အသွယ်/ဆွေမျိုးများ</label>
            <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="haveRelatives" id="haveRelativesYes" autocomplete="off" v-model="haveRelatives" :value="true"  />
                <label :class="{'btn': true, 'btn-primary': haveRelatives}" for="haveRelativesYes">ရှိပါသည်</label>

                <input type="radio" class="btn-check" name="haveRelatives" id="haveRelativesNo" autocomplete="off" value="false" v-model="haveRelatives" :value="false" />
                <label :class="{'btn': true, 'btn-primary': !haveRelatives}" for="haveRelativesNo">မရှိပါ</label>
            </div>
        </div>
<!-- Have Foreign Experience -->
<div class="col-12 haveforeignexperience_control">
  <label class="col-12 form-label mb-3">ပြည်ပနိုင်ငံများသို့ သွားရောက်အလုပ်လုပ်ကိုင်ထားခြင်း</label>
    <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="haveForeignExperience" id="haveForeignExperienceYes" autocomplete="off" :value="true" v-model="foreignExp"  />
        <label :class="{'btn': true, 'btn-primary': foreignExp}" for="haveForeignExperienceYes">ရှိပါသည်</label>

        <input type="radio" class="btn-check" name="haveForeignExperience" id="haveForeignExperienceNo" autocomplete="off" :value="false" v-model="foreignExp"  />
        <label :class="{'btn': true, 'btn-primary': !foreignExp}" for="haveForeignExperienceNo">မရှိပါ</label>
    </div>
</div>
<!-- Have to Pay Money for That Job -->
<div class="col-12 bribe_control">
  <label class="col-12 form-label mb-3">အလုပ်ရှာဖွေရာတွင် တစ်စုံတစ်ယောက်အား အခကြေးငွေ ပေးခဲ့ရခြင်း</label>
    <div class="col-12 btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="haveToBribe" id="haveToBribeYes" autocomplete="off" :value="true" v-model="bribe"  />
        <label :class="{'btn': true, 'btn-primary': bribe}" for="haveToBribeYes">ရှိပါသည်</label>

        <input type="radio" class="btn-check" name="haveToBribe" id="haveToBribeNo" autocomplete="off" :value="false" v-model="bribe"  />
        <label :class="{'btn': true, 'btn-primary': !bribe}" for="haveToBribeNo">မရှိပါ</label>
    </div>
</div>

<!-- Submit and Cancel Btn Section  -->
<div class="col-12 d-flex mt-5 text-center submitbtn_control">
  <div class="col-5 cancelbtn" @click="back_to_edit">
    <button class=" btn btn-outline-danger">ပယ်ဖျက်မည်</button>
  </div>
  <div class="col-1"></div>
  <div class="col-5 submitbtn" >
    <button type="submit" class="btn btn-outline-primary">အတည်ပြုသည်</button>
  </div>
</div>



    </form>
  </div>
</template>

<script>
// import { ref } from 'vue'
import { computed, onMounted,watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {

  setup() {
  const store = useStore();
  const router = useRouter();
  const id = computed(() => store.state.auth.id);
  const token = computed(() => store.state.auth.token);
  
 
  const address = computed(() => store.state.cvform.address);
  const weight = computed(() => store.state.cvform.weight);
  const heightFeet = computed(() => store.state.cvform.heightFeet);
  const heightInches = computed(() => store.state.cvform.heightInches);
  const experience = computed(() => store.state.cvform.experience);
  const howdidyouknow = computed(() => store.state.cvform.howdidyouknow);
  
  const getContact = computed(() => store.state.cvform.getContact);
  const phoneNumber = computed(() => store.state.cvform.phoneNumber);
  const dopassport = computed(() => store.state.cvform.dopassport);
  const passportCost = computed(() => store.state.cvform.passportCost);

  const canWait = computed(() => store.state.cvform.canWait);
  const haveRelatives = computed(() => store.state.cvform.haveRelatives);
  const havePassport = computed(() => store.state.cvform.havePassport);
  const vaccinated = computed(() => store.state.cvform.vaccinated);
  const colorBlind = computed(() => store.state.cvform.colorBlind);
  const englishSkill = computed(() => store.state.cvform.englishSkill);
  const mathSkill = computed(() => store.state.cvform.mathSkill);
  const foreignExp = computed(() => store.state.cvform.foreignExp);
  const bribe = computed(() => store.state.cvform.bribe);
  
  const updateInfos = () => {
    address.value;
    weight.value;
    heightFeet.value;
    heightInches.value;
    experience.value;
    howdidyouknow.value;
    getContact.value;
    phoneNumber.value;
    dopassport.value;
    passportCost.value;
    canWait.value;
    haveRelatives.value;
    havePassport.value;
    vaccinated.value;
    colorBlind.value;
    englishSkill.value;
    mathSkill.value;
    foreignExp.value;
    bribe.value;
  };

  const postInfos =  () =>{
  }

  onMounted(updateInfos);

  watch([canWait, haveRelatives,havePassport,vaccinated,colorBlind,englishSkill,mathSkill,foreignExp,bribe], () => {
      updateInfos();
    });

    const submitAllData = () =>{
      console.error("The id and address", address.value, id.value);
  }
  const back_to_edit = () =>{
    router.push('/cvform');
  }
  return {
    postInfos,
    id,
    token,
    back_to_edit,
    address,
    weight,
    heightFeet,
    heightInches,
    experience,
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
    bribe,
    submitAllData
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

  form > div > p{
    /* background-color: #f5f5f5; */
    /* background-color: red; */
  }

  .pagetitle{
    color: blue;
    text-align: center;
  }

  .company_name{
    color: blue;
  }

.form_control{
  margin-top: 3%;
    width: 350px;
    /* height: 400vh; */
    /* border: 1px solid blue; */
    padding: 3rem;
}

.form-control{
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #f5f5f5;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

}

.aggrement_checkbox{
  margin-top: 20px;
  margin-left: 30px !important;
  border: 10px solid black !important;
  width: 20px;
  height: 20px;
}

form > div{
  margin-bottom: 1.8rem;
  /* background-color: red; */
}

.phoneno_defaultno{
  background-color: #fff !important;
  height: 3rem;
  margin-top:1.2rem;

}

.phoneno_value, .passportcost_value{
  text-align: center;
  /* border: 1px solid blue; */
}

.input_number_box{
  
  background-color: #f5f5f5;
  display: block;
  height: 3rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  
  /* border: 1px solid blue; */
  border-radius: 0.25rem;

  margin-top:1.2rem;
}

.input-group-text{
  height: 2rem;
  margin-top: 1.5rem;
  background-color: white;
  border: none;

}
</style>