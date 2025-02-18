import React, { useState } from 'react';

export function ContactForm() {

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "76ae05aa-5fa9-44c1-aa0e-a6f9bffd6116");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setIsSubmitted(true);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const [isSubmitted, setIsSubmitted] = useState(false);


  return (
  
    <div className="row justify-content-center" style={{textAlign: "right"}}>
      <div class="col-6">
        <br/>
        <br/>
        <br/>

        {!isSubmitted ? (
        <div className="card border-primary mb-5">
          <div class="card-header"><h3 className="title">تواصلوا معنا</h3></div>
          <div className="card-body">
              <div className="row justify-content-center">

                <label className="label">هل انت صاحب متجر أم متسوق؟</label>
                 <br/>
                <select className="form-control" value={selectedOption} onChange={handleOptionChange} style={{textAlign:"right"}}>
                  <option value=""> اختر</option>
                  <option value="option1">أنا صاحب متجر</option>
                  <option value="option2">أنا متسوق</option>
                </select>
                </div>

                {selectedOption === 'option1' && (
                  <div>
                    <br/>
                    <form onSubmit={onSubmit}>
                      <input style={{textAlign:"right"}} className="form-control" type="hidden" name="type" value="صاحب متجر" />

                      <div className="row row-space">
                          <div className="col">
                                  <label className="label">الاسم</label>
                                  <input style={{textAlign:"right"}} className="form-control" type="text" name="name" required/>
                          </div>
                          <div className="col">
                                  <label className="label">رقم الجوال</label>
                                  <input style={{textAlign:"right"}} className="form-control" type="text" name="phone" required/>
                              
                          </div>
                      </div>
                      <br/>
                      <div className="row row-space">
                          <div className="col">
                                <label className="label">البريد الإلكتروني</label>
                                <input style={{textAlign:"right"}} className="form-control" type="text" name="email" required/>
                          </div>
                          <div className="col">
                
                            <label className="label">رابط المتجر</label>
                            <input style={{textAlign:"right"}} className="form-control" type="text" name="website" required/>
                          </div>
                      </div>
                      <br/>
                      <div className="row row-space">
                          <div className="col">
                            <label className="label">طريقة البيع</label>
                            <div className="rs-select2 js-select-simple select--no-search">
                                <select className="form-control" name="Sale_Method" style={{textAlign:"right"}} required>
                                    <option disabled="disabled" selected="selected">اختر</option>
                                    <option>متجر إلكتروني</option>
                                    <option>محل</option>
                                    <option>كلاهما</option>
                                </select>
                                <div className="select-dropdown"></div>
                            </div>
                          </div>
                          <div className="col">
                              <label className="label">متوسط قيمة سلة الشراء للعميل الواحد</label>
                              <input style={{textAlign:"right"}} className="form-control" type="text" name="Average_Sale" required/>
                          </div>
                      </div>
                      <br/>
                        <label className="label">مجموع العمليات خلال السنة بالريال</label>
                        <div className="rs-select2 js-select-simple select--no-search">
                            <select className="form-control" name="Yearly_Sales" style={{textAlign:"right"}} required>
                                <option disabled="disabled" selected="selected">اختر</option>
                                <option>من ٠ ل٢٠٠٠٠</option>
                                <option>من ٠ ل٥٠٠٠٠</option>
                                <option>أكثر من مليون ريال</option>
                            </select>
                            <div className="select-dropdown"></div>
                        </div>
                        <br/>

                        <div className="row justify-content-center mb-2">
                            <button className="btn btn-primary" type="submit">ارسل</button>
                        </div>                
                    </form>

                    <span>{result}</span>
                  </div>
                )}

                  {selectedOption === 'option2' && (
                    // link to the product
                    
                    <div>
                      <br/>
                      <form onSubmit={onSubmit} >
                      <input style={{textAlign:"right"}} className="form-control" type="hidden" name="type" value="متسوق" />

                        <div className="row row-space">
                            <div className="col">
                              <label className="label">الاسم</label>
                              <input style={{textAlign:"right"}} className="form-control" type="text" name="name" required/>
                            </div>
                            <div className="col">
                              <label className="label">رقم الجوال</label>
                              <input style={{textAlign:"right"}} className="form-control" type="text" name="phone" required/>
                            </div>
                        </div>
                        <br/>
                        <div className="row row-space">
                            <div className="col">
                                  <label className="label">البريد الإلكتروني</label>
                                  <input style={{textAlign:"right"}} className="form-control" type="text" name="email" required/>
                            </div>
                            <div className="col">
                  
                              <label className="label">قيمة الشراء التقريبية</label>
                              <input style={{textAlign:"right"}} className="form-control" type="text" name="Sale_Value" required/>
                            </div>
                        </div>
                        <br/>
                        <div className="row row-space">
                            <div className="col">
                              <label className="label">الخطة التقسيطية المفضلة</label>
                              <div className="rs-select2 js-select-simple select--no-search">
                                  <select className="form-control" name="Plan" style={{textAlign:"right"}} required>
                                      <option disabled="disabled" selected="selected">اختر</option>
                                      <option >٦ أشهر</option>
                                      <option>١٢ شهر</option>
                                      <option>٢٤ شهر</option>
                                      <option>٣٦ شهر</option>
                                  </select>
                                  <div className="select-dropdown"></div>
                              </div>
                            </div>
                            <div className="col">
                                <label className="label">اسم المتجر المراد الشراء منه</label>
                                <input style={{textAlign:"right"}} className="form-control" type="text" name="shop" required/>
                            </div>
                        </div>
                        <br/>
                        <div className="row row-space">

                        <div className="col">

                            <label className="label">هل لديك بطاقة ائتمانية ؟</label>
                              <select className="form-control" name="credit_card" style={{textAlign:"right"}} required>
                                  <option disabled="disabled" selected="selected">اختر</option>
                                  <option>نعم</option>
                                  <option>لا</option>
                              </select>
                              <div className="select-dropdown"></div>
                            </div>
                            <div className="col">
                                <label className="label">رابط المنتج المراد شراؤه</label>
                                <input style={{textAlign:"right"}} className="form-control" type="text" name="Product" required/>
                            </div>
                          <br/>
                          </div>
                          <br/>

                          <div className="row justify-content-center mb-2">
                            <button className="btn btn-primary" type="submit">ارسل</button>
                          </div>    
                      </form>
                      <span>{result}</span>
               
                    </div>
                    
                  )}

          </div>
        </div>
      ) : ( 

        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="alert alert-success" style={{textAlign: "center"}} role="alert">
              شكرا لتواصلك معنا! تم ارسال طلبك بنجاح. سوف نتواصل معك عما قريب
          </div>    
        </div>      
      )}

      </div>
    </div>
  );
}
