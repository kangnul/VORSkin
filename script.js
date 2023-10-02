window.onload = ()=>{

    let form = document.getElementById("subsForm")
    let name = document.getElementById("fullname")
    let email = document.getElementById("email")
    let phoneNum = document.getElementById("phoneNum")
    let preference = document.getElementsByName("preference")
    let agreement = document.getElementById("agreementCB")
    let errorMsg = document.getElementById("errorMsg")

    let error = []

    form.addEventListener("submit", (e)=>{
        error = []
        errorMsg.innerText = ''
        validateName()
        validateEmail()
        validatePhoneNum()
        validatePreference()
        validateAgreement()
        

        if(error.length > 0){
            errorMsg.innerText += 'Error:\n'
            for(err of error){
                errorMsg.innerText += err + '\n'
            } 
            e.preventDefault()
        }else{
            alert("Subscription Form is submitted")
        }
    })

    function cekEmpty(value){
        if(value === ''){
            return true
        }
        return false
    }

    function validateName(){
        let value = name.value.trim()       
        
        if(cekEmpty(value)){
            error.push("Please Fill Your Name")
        }else if(value.length <= 5){
            error.push("Fullname must be at least 5 Word(s)")
        }
    }

    function validateEmail(){
        let value = email.value.trim()
        
        if(cekEmpty(value)){
            error.push("Please Fill your Email")
        }else{
            let count = 0
            let indexAt = 0
            let indexTitik = 0
            let at = 0
            let titik = 0
            let salah = 0

            while(count < value.length){
                /*Validasi Email 
                -> Format benar xxxx@GGGGG.com
                -> Lambang '@' hanya boleh satu
                -> Index titik terakhir tidak boleh sebelum '@'
                -> Index terakhir selalu 'm'
                */ 

                if(value[count] == '@'){
                    at++
                    indexAt = a
                }
                if(value[count] == '.'){
                    titik++
                    indexTitik
                }
                if(count == value.length-1){
                    if(value[count] != 'm'){
                        salah = 1
                    }
                }
                count++
            }

            if(at != 1){
                salah = 1
            }
            if(indexTitik < indexAt){
                salah = 1
            }

            if(salah == 1){
                error.push("Please Insert Email with the right format")
            }
        }
    }

    function validatePhoneNum(){
        let value = phoneNum.value.trim()

        if(cekEmpty(value)){
            error.push("Please Fill your Phone Number")
        }else{
            if(value.length < 12){
                error.push("Wrong Phone Number Format (Too Short)")
            }else if(value.length > 15){
                error.push("Wrong Number Format (Too Long)")
            }
        }
    }

    function validatePreference(){
        for(a of preference){
            if(a.checked){
                return
            }
        }
        error.push("Preference Must be Chosen")
    }

    function validateAgreement(){
        if(agreement.checked){
            return
        }
        error.push("You Must Agree to Receive Newsletter")
    }
}