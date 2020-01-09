import React from 'react';
import './HeaderContacts.css';

const HeaderContacts = () => {
    return (
        <div className="header-contacts">
			<div className="col-width-25 header-contacts">+380501523665&#8195;&#8195;</div> 
			<div className="col-width-25 header-contacts">+380978757141&#8195;&#8195;</div> 
			<div className="col-width-25 header-contacts">+380509898041&#8195;&#8195;</div>
			<div className="col-width-25 header-links">
				<div className='col-height-50'><a href='https://www.facebook.com/companylogisticssolutions/'>Мы в Facebook</a></div> 
				<div className='col-height-50'><a href='https://mail.ukr.net/desktop#sendmsg'>logistics-solutions@ukr.net</a></div>
			</div>	
		</div>
    )
}
export default HeaderContacts