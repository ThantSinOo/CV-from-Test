// import { get } from "core-js/core/dict";

export default {
    namespaced: true,
    state: {
      imageUrl: '',
      address: '',
      weight: '',
      heightFeet: '',
      heightInches: '',
      experience: '',
      howdidyouknow: '',
      getContact: '',
      phoneNumber: '',
      dopassport: '',
      passportCost: '',
      canWait: '',
      haveRelatives: '',
      havePassport: '',
      vaccinated: '',
      colorBlind: '',
      englishSkill: '',
      mathSkill: '',
      foreignExp: '',
      bribe: '',
    },
    mutations: {
      
      SET_ADDRESS(state, address) {
        state.address = address;
      },
      SET_WEIGHT(state, weight) {
        state.weight = weight;
      },
      SET_HEIGHT_FEET(state, heightFeet) {
        state.heightFeet = heightFeet;
      },
      SET_HEIGHT_INCHES(state, heightInches) {
        state.heightInches = heightInches;
      },
      SET_EXPERIENCE(state, experience) {
        state.experience = experience;
      },
      SET_HOW_DID_YOU_KNOW(state, howdidyouknow) {
        state.howdidyouknow = howdidyouknow;
      },
      
      SET_GET_CONTACT(state, getContact) {
          state.getContact = getContact;
      },
      
      SET_PHONE_NO(state, phoneNumber) {
        state.phoneNumber = phoneNumber;
      },
      SET_HOW_YOU_GET_PASSPORT(state, dopassport) {
        state.dopassport = dopassport;
      },
      SET_PASSPORT_COST(state, passportCost){
        state.passportCost = passportCost;
      },
      SET_CAN_WAIT(state, canWait) {
        state.canWait = canWait;
        // console.log("Can Wait value", canWait);
      },
      SET_HAVE_RELATIVES(state, haveRelatives) {
        state.haveRelatives = haveRelatives;
        // console.log("Have Relatives value", haveRelatives);
      },
      SET_HAVE_PASSPORT(state, havePassport) {
        state.havePassport = havePassport;
        // console.log("Have Passport value", havePassport);
      
      },
      SET_HAVE_VACCINATED(state, vaccinated) {
        state.vaccinated = vaccinated;
        // console.log("Have Vaccinated value", vaccinated);
      },
      SET_COLOR_BLIND(state, colorBlind) {
        state.colorBlind = colorBlind;
        // console.log("Color Blind value", colorBlind);
      },
      SET_ENGLISH_SKILL(state, englishSkill){
        state.englishSkill = englishSkill;
        // console.log("English Skill value", englishSkill);
      },
      SET_MATH_SKILL(state, mathSkill){
        state.mathSkill = mathSkill;
        // console.log("Math Skill value", mathSkill);
      },
      SET_FOREIGN_EXP(state, foreignExp){
        state.foreignExp = foreignExp;
        // console.log("Foreign Exp value", foreignExp);
      
      },
      SET_BRIBE(state, bribe){
        state.bribe = bribe;
        // console.log("Bribe value", bribe);
      },
      SET_IMAGE_URL(state, imageUrl){
        state.imageUrl = imageUrl;
        // console.log("Image Url value", imageUrl);
      }
      
      
    },
    actions: {
      
  
      // New actions for the remaining fields
      updateAddress({ commit }, address) {
        commit('SET_ADDRESS', address);
        // console.log("Address", address);
      },
      updateWeight({ commit }, weight) {
        commit('SET_WEIGHT', weight);
        // console.log("Weight", weight);
      },
      updateHeightFeet({ commit }, heightFeet) {
        commit('SET_HEIGHT_FEET', heightFeet);
        // console.log("Height (Feet)", heightFeet);
      },
      updateHeightInches({ commit }, heightInches) {
        commit('SET_HEIGHT_INCHES', heightInches);
        // console.log("Height (Inches)", heightInches);
      },
      updateExperience({ commit }, experience) {
        commit('SET_EXPERIENCE', experience);
        // console.log("Experience", experience);
      },
      updateHowDidYouKnow({ commit }, howdidyouknow) {
        commit('SET_HOW_DID_YOU_KNOW', howdidyouknow);
        // console.log("How Did You Know", howdidyouknow);
      },

      updateGetContact({ commit }, getContact) {
        commit('SET_GET_CONTACT', getContact);
      },
      
      updatePhoneNo({ commit }, phoneNumber) {
        commit('SET_PHONE_NO', phoneNumber);
        // console.log("Phone Number", phoneNumber);
      },
      updateHowYouGetPassport({ commit }, dopassport) {
        commit('SET_HOW_YOU_GET_PASSPORT', dopassport);
        // console.log("How You Get Passport", dopassport);
      },
      updatePassportCost({ commit }, passportCost) {
        commit('SET_PASSPORT_COST', passportCost);
        // console.log("Passport Cost", passportCost);
      },
      updateCanWait({ commit }, canWait) {
          commit('SET_CAN_WAIT', canWait);
          // console.log("Can Wait value", canWait);
      },
      updateHaveRelatives({ commit }, haveRelatives) {
        commit('SET_HAVE_RELATIVES', haveRelatives);
        // console.log("Have Relatives", haveRelatives);
      },
      updateHavePassport({ commit }, havePassport) {
        commit('SET_HAVE_PASSPORT', havePassport);
        // console.log("Have Passport", havePassport);
      },
      updateVaccinated({ commit }, vaccinated) {
        commit('SET_HAVE_VACCINATED', vaccinated);
        // console.log("Have Vaccinated", vaccinated);
      },
      updateColorBlind({ commit }, colorBlind) {
        commit('SET_COLOR_BLIND', colorBlind);
        // console.log("Color Blind", colorBlind);
      },
      updateEnglishSkill({ commit }, englishSkill) {
        commit('SET_ENGLISH_SKILL', englishSkill);
        // console.log("English Skill", englishSkill);
      },
      updateMathSkill({ commit }, mathSkill) {
        commit('SET_MATH_SKILL', mathSkill);
        // console.log("Math Skill", mathSkill);
      },
      updateForeignExp({ commit }, foreignExp) {
        commit('SET_FOREIGN_EXP', foreignExp);
        // console.log("Foreign Exp", foreignExp);
      },
      updateBribe({ commit }, bribe) {
        commit('SET_BRIBE', bribe);
        // console.log("Bribe", bribe);
      
      },
      updateImage({ commit }, imageUrl) {
        commit('SET_IMAGE_URL', imageUrl);
      }
    }
  };
  