import React from 'react';


export default function Contact() {
    let initialValue;
const handleSubmit = (event) => {
    event.preventDefault()

    const data = {
          fullName: initialValue,
          email: initialValue,
          message: initialValue
          }
    alert("Thanks for submitting!")
    
}

  return (
    <div className="home">
  <p>alltrend.graphics@gmail.com</p>
<p className='lead'>123-456-7890 - +63 0912 2345 234</p><hr></hr>
  <p>Molave Zamboanga del Sur</p>
<p className='lead'>Philippines, 7023</p><hr></hr>
  <br></br>

  <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit} method="POST">
                            <div class="mb-2">
                                <label for="exampleForm" class="form-label">Full Name</label>
                                <input type="text" name="fullName" className="fullName" class="form-control" id="exampleForm" placeholder="Kayden Break" required/>
                            </div>
                            <div class="mb-2">
                                <label for="exampleForm" class="form-label">Email address</label>
                                <input type="email" name="email" className="email" class="form-control" id="exampleFormControlInput1" placeholder="Shoewear@gmail.com" required/>
                            </div>
                            <div class="mb-2">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" name="message" rows="3" placeholder="Type your message here..." required></textarea>
                            </div>
                            <button type="submit" class="btn btn-dark btn-lg text-warning">Send Message</button>
                        </form>
                    </div>
                    <div className='col-md-6'>
                    <img src="/assets/contact1.png" className="mx-auto d-block w-75 " alt="..."/>

                    </div>
                </div>
                <div display="flex" >
            <button className="btn btn-outline-warning bg-dark me-2 fa fa-facebook"> facebook</button>
            <button className="btn btn-outline-warning bg-dark me-2 fa fa-twitter"> twitter</button>
            <button className="btn btn-outline-warning bg-dark me-2 fa fa-google"> google</button>
            <button className="btn btn-outline-warning bg-dark me-2 fa fa-github"> github</button>
            </div>

</div>
  )
}
