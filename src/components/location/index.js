import React from 'react'

const  Location = () => {
    return (
        <div className="location_wrapper pt-5" title="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3963.7824119182997!2d3.3747799!3d6.5491342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b1b5899a8bd%3A0x8b88313d1d73d3b0!2sStutern!5e0!3m2!1sen!2sng!4v1574797435599!5m2!1sen!2sng" width="100%" height="300px " frameBorder="0" allowFullScreen></iframe>

            <div className="location_tag mt-5">
                <div>Contact Us at Our Office</div>
            </div>
        </div>
    )
}

export default  Location
