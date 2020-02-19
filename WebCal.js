var res=0;





function calculator(currentStep){
    switch(currentStep){
        case nums:
            if(stk.top()==nums)
            {
                res=res*10+currentStep;
                stk.pop();
                stk.push(res);
            }
            else if(stk.top()==cal)
            {
                if(hasCal)   //before has cal and cal stk
                {
                    stk.push(currentStep);
                    cal(stk);
                }
                else
                {
                    stk.push(currentStep);
                }
            }
            else  //can not be sign, stk can not be = or % AC ±
            {

            }
        break;
        case cal:
            if(stk.top()==nums) //0~9
            {
                if(hasCal)
                {
                    if(currentStep=='+' || currentStep =='-')
                    {

                    }
                }
                stk.push(currentStep);
            }
            else if(stk.top()==cal) //+-*/
            {
                stk.pop();
                stk.push(currentStep);
            }
            else
            {

            }
        break;
        case sign:   //± and %
            if(stk.top()==nums)
            {
                var tmp=stk.top();
                stk.pop();
                tmp=tmp*currentStep;
                stk.push(tmp);
            }
            else if(stk.top()==cal)
            {
                stk.push(0);
            }
        break;
        case equal:
            cal(stk);
        break;
    }


}

function changebutton(){}

function display(){}