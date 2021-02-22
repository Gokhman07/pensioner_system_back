const Router = require("express").Router;
const islogin = require("../middleware/index").islogin;
const Risk_insurance = require("../models/risk_insurances");
const Pensioners = require("../models/pensioners");

const router = Router();
const jwt = require('jsonwebtoken')
const moment = require("moment")

router.get("/getinfo/:id", async (req, res) => {
    const info = await Risk_insurance.findAll({
    
    where:{
  
      'id_pensioner':req.params.id
    },
  
  
    
    attributes:  [ 'manufacture_name','pos_type', 'collective_name','cash_opening_date',
'report_year','period_report','last_upadete_of_this_screen','total_annual_premium','insuarunce_amount',
'insurance_agency_handles','agent_name','agent_telephone','agent_mail','remarks'
]
    },
   
    );
    res.send(info);
    
   
  });
  router.put("/update", islogin, async (req, res) => {

    const { id_pensioner,manufacture_name,pos_type, collective_name,cash_opening_date,
    report_year,period_report,last_upadete_of_this_screen,total_annual_premium,insuarunce_amount,
    insurance_agency_handles,agent_name,agent_telephone,agent_mail,remarks} = req.body; 
    console.log(username)
    const upateinfo = await Risk_insurance.update(
      {
        manufacture_name: manufacture_name,
        pos_type: pos_type,
        collective_name: collective_name,
        cash_opening_date: cash_opening_date,
        report_year: report_year,
        period_report: period_report,
        last_upadete_of_this_screen: last_upadete_of_this_screen,
        total_annual_premium: total_annual_premium,
        insuarunce_amount: insuarunce_amount,
        insurance_agency_handles: insurance_agency_handles,
        agent_name: agent_name,
        agent_telephone: agent_telephone,
        agent_mail:agent_mail,
        remarks: remarks

      },
      {
        where: {
            id_pensioner: id_pensioner,
        },
      }
    );
   XI
    //res.send(newauthor);
  });


  
  


module.exports = router;
