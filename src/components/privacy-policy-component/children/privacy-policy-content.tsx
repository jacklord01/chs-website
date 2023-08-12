import Link from "next/link";

interface PrivacyPolicyContentProps {}

const PrivacyPolicyContent: React.FC<
	PrivacyPolicyContentProps
> = ({}: PrivacyPolicyContentProps) => {
	return (
		<div className="apply-section privacy-policy pt-[50px] md:py-[90px]">
			<div className="container mx-auto px-[16px]">
				<div className="privacy-policy-content">
					<h4 className="title">Privacy Policy</h4>
					<p>
						Churchfield Home Services Ltd. is committed to ensuring the
						collection, accuracy, storage, security, use, disclosure, and
						destruction of personal information is compliant with current
						ePrivacy Regulations 2011 (S.I. 336 of 2011) and the EU ePrivacy
						Directive 2002/58/EC. With updates made to ensure compliance with
						the General Data Protection Regulations 2018.
					</p>
					<p className="pt-2">
						Churchfield Home Services ensures its employees receive training in
						the proper handling of personal information. Access to information
						held by us is limited to authorised people on a strict need-to-know
						basis relevant to their roles and responsibilities.
					</p>
				</div>
				<div className="privacy-policy-content">
					<h4 className="title">What is Personal Information?</h4>
					<p>
						Personal information is any information about you that identifies
						you or by which your identity can be reasonably determined. <br />
						What Personal Information do we collect?
						<br />
						The personal information that Churchfield Home Services collects
						about you may include your:
					</p>
					<ul>
						<li>Name</li>
						<li>Address</li>
						<li>Email address</li>
						<li>Telephone number</li>
						<li>
							Physical survey information of your property including photographs
							and geolocation (latitude, longitude)
						</li>
						<li>MPRN Number</li>
						<li>Property ID number</li>
						<li>Electric Ireland contract number</li>
					</ul>
				</div>
				<div className="privacy-policy-content pt-4">
					<h4 className="title">
						Why and how Churchfield Home Services collects Personal Information?
					</h4>

					<p>
						Churchfield Home Services collects personal information in a
						transparent, consensual way with full cooperation and knowledge of
						interested parties. Personal information is essentially collected by
						our marketing, sales, surveying, project management, installer,
						customer service and accounts personnel for the primary purpose of
						administering Churchfield Home Services Installation Services,
						including the generation of detailed customer quotations, provision
						of upgrade installation works, quality validation of those works and
						the administering of SEAI, Electric Ireland and Revenue Grants and
						Incentives on behalf of customers.
					</p>
					<p>
						Personal information is collected from you in the following ways:
					</p>
					<ul>
						<li>
							Through our website enquiry forms (
							<Link className="text-link underline text-[#08a8ff]" href="/">
								www.churchfieldhomeservices.ie
							</Link>
							).
						</li>
						<li>
							By phone, written and email communication to our customer service
							and sales staff.
						</li>
						<li>
							By camera and physical survey when completing an onsite survey of
							a customer’s property.
						</li>
						<li>
							By camera and physical inspection by our installers and Project
							Managers during installation.
						</li>
						<li>
							By camera and physical inspection by our quality administration
							during our quality validation process.
						</li>
						<li>
							By phone, written and email communication to our accounts staff.
						</li>
					</ul>
				</div>
				<div className="privacy-policy-content pt-4">
					<h4 className="title">Personal Information Security</h4>

					<p>
						Churchfield Home Services Ltd. is committed to the protection of
						your personal information from unauthorised access. We use a range
						of security mechanisms and procedures to protect the personal
						information we hold about you.
					</p>
					<p>
						Churchfield Home Services makes all reasonable efforts to ensure
						your personal information is stored securely both in electronic and
						physical forms and complies with ePrivacy Regulations 2011 (S.I. 336
						of 2011) and the EU ePrivacy Directive 2002/58/EC with updates made
						to ensure compliance with the General Data Protection Regulations
						2018.
					</p>
					<p>
						The{" "}
						<Link href="/" className="hover:text-[#08a8ff]">
							www.churchfieldhomeservices.ie
						</Link>{" "}
						website pages from which you may forward to us personal information
						are encrypted through a password-protected portal.
					</p>
					<p>
						However, you should be aware that there may be risks associated when
						transferring your personal information to us from other internet
						facilities or by email. Personal information that is no longer
						required will be destroyed following legislation.
					</p>
				</div>
				<div className="privacy-policy-content pt-4">
					<h4 className="title">Use and Disclosure of Personal Information</h4>

					<p>Your personal information may be used to:</p>
					<ul>
						<li>Verify your name, address, and identity.</li>
						<li>
							Provide you with Churchfield Home Services quotations and
							services.
						</li>
						<li>
							Validate the quality management of the products and services we
							provide.
						</li>
						<li>
							Administer SEAI, Electric Ireland and Revenue Grants and
							Incentives on behalf of our customers.
						</li>
						<li>
							Address any query, feedback, or complaints you may have; and
							contact you for any other reason.
						</li>
					</ul>
					<p className="pt-3">
						Churchfield Home Services may disclose your information to: <br />
						Its suppliers, their auditors, and/or their regulators; Your
						authorised representative (e.g., legal advisers) bu
					</p>
					<ul>
						<li>Only upon receipt of your written authorisation.</li>
						<li>
							Unrelated third parties to enable outsourcing of relevant
							functions relating to the provision of products and
						</li>
						<li>
							Marketing products and services and only for the primary purpose
							of providing those functions.
						</li>
						<li>
							Professional advisers including but not limited to accountants,
							auditors and legal advisers, and Courts,
						</li>
						<li>
							Government and regulatory authorities as required or authorised by
							law.
						</li>
					</ul>
					<p className="pt-3">
						With distinct consent, we will use your data to:
					</p>
					<ul>
						<li>
							Maintain and develop our business systems and infrastructure,
							including testing and upgrading these systems.
						</li>
						<li>
							Communicate new products and services to you, for marketing
							purposes, including, the opportunity to take up special promotions
							and offers.
						</li>
					</ul>
					<p className="pt-3">
						You also consent to any such third party storing your personal
						information. Any such third party will not be permitted to re-sell,
						use, or share the data provided, without clear consent from you the
						data subject.
					</p>
					<p className="pt-3">
						Churchfield Home Services only transfer data to GDPR-compliant third
						parties with full consent from the data subject at the initial stage
						of data collection. This is included in the Terms & Conditions.
					</p>
					<p className="pt-3">
						Churchfield Home Services may disclose your information to third
						parties required to carry out the services requested by you:
					</p>
					<ul>
						<li>
							SEAI (Sustainable Energy Authority of Ireland) –{" "}
							<Link
								className="text-link underline text-[#08a8ff]"
								href="https://www.seai.ie"
							>
								https://www.seai.ie/
							</Link>
						</li>
						<li>
							Electric Ireland – 
							<Link
								className="text-link underline text-[#08a8ff]"
								href="https://www.electricireland.ie/residential/products/heating-services-repair/energy-efficiency-incentive"
							>
								https://www.electricireland.ie/residential/products/heating-services-repair/energy-efficiency-incentive
							</Link>
						</li>
						<li>
							Pipedrive – 
							<Link
								className="text-link underline text-[#08a8ff]"
								href="https://www.pripedrive.com"
							>
								www.pripedrive.com
							</Link> 
							– datacentre housed in the EU.
						</li>
						<li>
							SMSAPI – SMSAPI severs both Production and Disaster Recovery
							located within the EU.
						</li>
						<li>Twilio – Twilio datacentre located in the EU.</li>
						<li>
							Fastfield – 
							<Link
								className="text-link underline text-[#08a8ff]"
								href="https://www.fastfield.com"
							>
								www.fastfield.com
							</Link>
						</li>
						<li>
							Zapier – 
							<Link
								className="text-link underline text-[#08a8ff]"
								href="https://www.zapier.com"
							>
								www.zapier.com
							</Link>
						</li>
						<li>
							Fastfield & Zapier are certified under the Privacy Shield, which
							is a framework to support the safe.
						</li>
						<li>
							Transfer of data between the EU and the US. View their
							registration here:{" "}
							<Link
								className="text-link underline text-[#08a8ff]"
								href="https://www.privacyshield.gov/list"
							>
								https://www.privacyshield.gov/list
							</Link>
						</li>
						<li>Google Drive – Google Drive data centre located in the EU.</li>
						<li>Dropbox – Dropbox data centre located in the EU.</li>
						<li>
							SurveyMonkey – SurveyMonkey Inc. is certified under the Privacy
							Shield.
						</li>
					</ul>
				</div>
				<div className="privacy-policy-content">
					<h4 className="title">Access to Personal Information</h4>

					<p>
						All data subjects have the right to be given a copy of the
						information held by Churchfield Home Services about you. Requests
						will be processed free of charge where possible. However, if deemed
						necessary, we may charge a small fee which will be based on the
						administrative cost of providing the information. This fee will not
						exceed 6.35euro.
					</p>
					<p>
						We will provide the requested information to you within 1 month of
						the receipt of a valid request in writing. The response will be
						given in electronic form unless otherwise requested.
					</p>
					<p>
						All subject access requests can be made via email to
						SAR@churchfieldhomeservices.ie or via post to:
					</p>
					<p className="pt-2">
						Churchfield Home Services, <br />
						Crossmolina Business Park,
						<br />
						Ballina Road,
						<br />
						Co. Mayo,
						<br />
						F26 E9A0
						<br />
					</p>
				</div>
				<div className="privacy-policy-content">
					<h4 className="title">Enquiries and Complaints</h4>

					<p>
						Information about the ePrivacy Regulations 2011 (S.I. 336 of 2011)
						and the EU ePrivacy Directive 2002/58/EC legislation is available
						from the Office of the Irish Data Protection Commissioner, Canal
						House, Station Road, Portarlington, Co. Laois, Ireland.
					</p>
					<p>
						If you have a complaint regarding Churchfield Home Services
						management of your personal information or wish to correct
						information held by us or require further information, please
						contact us.
					</p>
					<p>
						Our policy is to respond to your complaint, correction request or
						query within a reasonable period after the complaint is received. If
						you are not satisfied with the outcome of your complaint, you may
						refer your complaint to the Office of Data Protection Commissioner
						by
					</p>
					<ul>
						<li>Lo Call: 1800 437 737</li>
						<li>Phone: 017 650 100</li>
						<li>
							By visiting the website:{" "}
							<Link
								className="text-link underline text-[#08a8ff]"
								href="https://www.dataprotection.ie"
							>
								www.dataprotection.ie
							</Link>
						</li>
					</ul>
				</div>
				<div className="privacy-policy-content">
					<h4 className="title">Changes to the Privacy Policy</h4>

					<p>
						Churchfield Home Services reserves the right to make changes to this
						Privacy Statement. Any changes made to the Privacy Statement in the
						future will be posted on this page and such changes will become
						effective upon posting the revised Privacy Statement. If we make any
						material or substantial changes to this Privacy Statement, we will
						use reasonable endeavours to inform you by email or by notice on our
						churchfieldhomeservices.ie website or other agreed communications
						channels.
					</p>
				</div>
				<div className="privacy-policy-content">
					<h4 className="title">Contact Details</h4>

					<p>
						Churchfield Home Services, <br />
						Crossmolina Business Park,
						<br />
						Ballina Road,
						<br />
						Co. Mayo,
						<br />
						F26 E9A0
					</p>

					<p>
						+353 96 38555 (phone) <br />
						<Link
							className="text-link underline text-[#08a8ff]"
							href="info@churchfieldhomeservices.ie"
						>
							info@churchfieldhomeservices.ie
						</Link>
						<br />
						<Link
							className="text-link underline text-[#08a8ff]"
							href="/"
						>
							www.churchfieldhomeservices.ie
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default PrivacyPolicyContent;
