import React from 'react';

import '../public/styles/Blockers.css';
import logo from '../public/images/block.PNG';

function Blockers() {
	return (
		//Modal 2 for Blockers
		<div id="blockers" className="modal2">

			<div className="modalheader2">
				<div className="modalheadertitle2">
					<img src={logo} alt="" />
					<h3>Blockers</h3>
				</div>
				<div className="all-blockers">
					<p>All Blockers</p>
					<i className="fa fa-angle-down" />
				</div>
				<div className="modalheaderoptions">
					<input type="checkbox" name="show-dates" id="" />
					<label for="">Show Dates</label>
					<span className="close-modal2">•••</span>
				</div>
			</div>
			<div className="blocker-content">
				<div className="person-name">
					<i className="fas fa-user" />
					<h5>Isabella Estrada</h5>
				</div>
				<div className="person-issue">
					<label className="person-chk">New login credentials are not valid.</label>
					<input type="checkbox" className="checkbox" />
				</div>
				<div className="person-name">
					<i className="fas fa-user" />
					<h5>Ralph Andrews</h5>
				</div>
				<div className="person-issue">
					<label className="person-chk">Waiting for documentation for managment</label>
					<input type="checkbox" className="checkbox" />
				</div>
				<div className="person-name">
					<i className="fas fa-user" />
					<h5>Dustin Reyes</h5>
				</div>
				<div className="person-issue">
					<label className="person-chk">Requested access to remove server 2 days ago, no reply yet from support</label>
					<input type="checkbox" className="checkbox" />
				</div>
				<div className="content-separator">
					<a href="#">Hide Completed</a>
				</div>
				<div className="person-name">
					<i className="fas fa-user" />
					<h5>Stephen Hodges</h5>
				</div>
				<div className="issue-solved">
					<label className="person-chk">Png icons needs to be replaced on landing page</label>
					<input type="checkbox" className="checkbox" />
				</div>
				<div className="issue-solved">
					<label className="person-chk">Login credentials expired</label>
					<input type="checkbox" className="checkbox" />
				</div>
			</div>
			<div className="add">
			<a href="/index.html"><i className="fa fa-plus" /></a>
			</div>
		</div>
  );
}

export default Blockers;
