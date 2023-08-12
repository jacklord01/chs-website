import Link from "next/link";

interface PaymentPolicyContentProps {}

const PaymentPolicyContent: React.FC<
	PaymentPolicyContentProps
> = ({}: PaymentPolicyContentProps) => {
	return (
		<div className="apply-section privacy-policy pt-[50px] md:py-[90px]">
			<div className="container mx-auto px-[16px]">
				<div className="privacy-policy-content">
					<h4 className="title">Payment Policy</h4>

					<ul>
						<li>
							{" "}
							Churchfield Home Services value and understand the importance of
							putting our customers at the centre of our business operations and
							are fully committed to providing the highest standards of customer
							service through the services we provide.
						</li>
						<li>
							We have outlined our Payment Policy to provide our customers with
							transparency and clarity regarding payment for goods and services
							to be provided by Churchfield Home Services.
						</li>
						<li>
							All quotations are valid for a period of 30 days and are subject
							to change thereafter provided the booking deposit has not been
							received by Churchfield Home Services.
						</li>
						<li>
							Please note all grants and incentives are subject to confirmation
							by the issuing authorities.
						</li>
						<li>
							Payment of the Booking Deposit constitutes as the Homeowners
							acceptance of our terms of contract.
						</li>
						<li>
							On receipt of the Booking Deposit, our surveyor will contact you
							directly to agree and confirm a suitable time for the Pre-Install
							Site Survey to be carried out. After the survey has been submitted
							to the office – your property will be added to our weekly schedule
							on the following Tuesday, and your assigned Project Manager will
							be in touch to confirm the install date.
						</li>
						<li>
							Any further changes, additions or deductions required will be
							reflected on your account in the form of a variation which you
							will receive prior to any change being made, and your Project
							Manager will inform the Accounts Team to update your Interim
							Payment Invoice of same.
						</li>
						<li>
							Your Project Manager will advise you when the subsequent payments
							are due.
						</li>
						<li>
							Payments should be referenced using the quotation number on your
							quotation documentation (Example: CHS- 019-12345).
						</li>
					</ul>
				</div>
				<div className="privacy-policy-content pt-4">
					<h4 className="title">Standard Payment Policy</h4>
					<p className="font-bold text-[#204971] !pb-0">Eligibility:</p>
					<p>
						Our Standard Payment Policy is when the grant is paid directly to
						the customer i.e., the Homeowner claims the value of the SEAI grant
						retrospectively, or if the works have been requested by a third
						party i.e., a builder on behalf of the Homeowner.
					</p>
					<p className="font-bold text-[#204971] !pb-0">Booking Deposit</p>
					<p>
						A booking deposit is due upon confirmation of an order and is
						required to be paid before an installation date can be confirmed.
						This deposit is non-refundable but is transferable from one order to
						another should the details of the order change after the order is
						placed. Deposit payments are calculated to be 10% of the total value
						of the order, less the discounts only.
					</p>
					<p className="font-bold text-[#204971] !pb-0">
						Commencement Payment – 30%
					</p>
					<p>
						A 30% commencement payment is due 5 days before the installation
						commences or before installation materials are delivered to site.
					</p>
					<p className="font-bold text-[#204971] !pb-0">
						Interim Payment – 30%
					</p>
					<p>
						A mid payment of 30% is due once 70% of the total value of works has
						been completed as set out in the customer quotation. Any agreed
						variations will be sent to the customer in a separate invoice at the
						same time as the customer is sent the interim payment invoice.
					</p>
					<p className="font-bold text-[#204971] !pb-0">Final Payment</p>
					<p>
						Final payment is due upon practical completion of an installation
						where the works have been carried to such a stage that they can be
						taken over and used by the client for their intended purpose and
						that any items of work or supply then outstanding are trivial and
						will be carried out under the service warranty for the installation.
					</p>
					<p className="font-bold text-[#204971] !pb-0">
						Responsibility for Payment
					</p>
					<p>
						The responsibility for payment lies with the customer who places the
						order for the installation.
					</p>
					<p className="font-bold text-[#204971] !pb-0">Payment Terms</p>
					<p>
						The payment terms for completing payments are within 5 working days
						once an invoice has been issued, in full without any deduction or
						withholding except as required by law. You are not entitled to
						assert any credit, set-off or counterclaim against Churchfield Home
						Services to justify withholding payment of any such amount in whole
						or in part.
					</p>
					<p className="font-bold text-[#204971] !pb-0">Variations</p>
					<p>
						Any further changes, additions or deductions required will be
						reflected on the account in the form of a variation, which the
						Homeowner will receive before any changes are made and Churchfield
						Home Services will issue an additional invoice for the variation at
						the time the Interim Payment Invoice is sent.
					</p>
				</div>
				<div className="privacy-policy-content pt-4">
					<h4 className="title">SEAI Grant Deferral Payment Policy</h4>
					<p className="font-bold text-[#204971] !pb-0">Overview:</p>
					<p>
						Our SEAI Grant Deferral Payment policy is to be used by customers
						that are availing of SEAI Individual Energy Upgrade Grants and wish
						to make payment for only the net cost of the works (total cost
						including discount less SEAI Grant) and defer the payment of the
						SEAI Grant directly to Churchfield Home Services.
					</p>
					<p className="font-bold text-[#204971] !pb-0">Eligibility:</p>
					<p>
						This payment option is only available to customers who receive an
						SEAI grant where all works on the application are being completed by
						Churchfield Home Services and the mandatory BER Assessment is
						carried out by one of the company’s approved panels of BER Assessors
						within 5 days of the works being practically complete.
					</p>
					<p>
						This payment option is not available in situations where significant
						building works are being completed by any third party which may
						delay the ability of Churchfield Home Services to finalize all
						quality audits within 5 days of the installation being completed.
					</p>
					<p className="font-bold text-[#204971] !pb-0">Booking Deposit</p>
					<p>
						A booking deposit is due upon confirmation of an order and is
						required to be paid before an installation date can be confirmed.
						This deposit is non-refundable but is transferable from one order to
						another should the details of the order change after the order is
						placed. Deposit payments are calculated to be 10% of the total value
						of the order, less the discounts only.
					</p>
					<p>
						Please note that grants and incentives that apply to the order are
						deducted from the Interim payment.
					</p>

					<p className="font-bold text-[#204971] !pb-0">
						Commencement Payment – 30%
					</p>
					<p>
						A 30% commencement payment is due 5 days before the installation
						commences or before installation materials are delivered to site.
					</p>

					<p className="font-bold text-[#204971] !pb-0">
						Interim Payment – Balance
					</p>
					<p>
						This payment is due once 70% of the total value of works has been
						completed as set out in the customer quotation. This is calculated
						as the total cost of the works including discounts, plus any project
						variations that may apply, less all payments received to date, and
						less the value of the SEAI Grant (payable directly to Churchfield
						Home Services).
					</p>

					<p className="font-bold text-[#204971] !pb-0">
						Final Payment – SEAI Grant
					</p>
					<p>
						A final payment is payable directly from SEAI upon completion of an
						installation where the works have been quality audited, a BER
						Assessment carried out and the SEAI DOW forms are completed,
						audited, and submitted to SEAI for processing.
					</p>
					<p>
						Any items of work outstanding that are trivial will be then carried
						out under the service warranty for the installation.
					</p>

					<p className="font-bold text-[#204971] !pb-0">
						Responsibility for Payment
					</p>
					<p>
						The responsibility for payment lies with the customer who places the
						order for the installation.
					</p>

					<p className="font-bold text-[#204971] !pb-0">Payment Terms</p>
					<p>
						The payment terms for completing payments are within 5 working days
						once an invoice has been issued, in full without any deduction or
						withholding except as required by law. You are not entitled to
						assert any credit, set-off or counterclaim against Churchfield Home
						Services to justify withholding payment of any such amount in whole
						or in part.
					</p>
					<p className="font-bold text-[#204971] !pb-0">Variations</p>
					<p>
						Any further changes, additions or deductions required will be
						reflected on the account in the form of a variation, which the
						Homeowner will receive before any changes are made and Churchfield
						Home Services will issue an additional invoice for the variation at
						the time the Interim Payment Invoice is sent.
					</p>
				</div>
				<div className="privacy-policy-content pt-4">
					<h4 className="title">Sample Quotation</h4>
					<table className="table-auto app-table w-full">
						<tbody>
							<tr>
								<td>Total Cost of Works</td>
								<td className="text-right" style={{ width: "15%" }}>
									€7,000
								</td>
							</tr>
							<tr>
								<td>CHS Discount</td>
								<td className="text-right" style={{ width: "15%" }}>
									€700
								</td>
							</tr>
							<tr>
								<td>SEAI Grant</td>
								<td className="text-right" style={{ width: "15%" }}>
									€1,500
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="privacy-policy-content pt-4">
					<h4 className="title">
						Standard Payment Policy Example (Grant payable to Homeowner)
					</h4>
					<table className="table-auto app-table w-full">
						<tbody>
							<tr>
								<td>Total Cost of Works</td>
								<td className="text-right" style={{ width: "15%" }}>
									€7,000
								</td>
							</tr>
							<tr>
								<td>Less Discount</td>
								<td className="text-right" style={{ width: "15%" }}>
									€200
								</td>
							</tr>
							<tr>
								<td>
									Deposit and subsequent payments calculated using this amount
								</td>
								<td className="text-right" style={{ width: "15%" }}>
									€6,800
								</td>
							</tr>
							<tr>
								<td>Deposit calculated at 10%</td>
								<td className="text-right" style={{ width: "15%" }}>
									€680
								</td>
							</tr>
							<tr>
								<td colSpan={2}>
									<b>30% subsequent payments</b>
								</td>
							</tr>
							<tr>
								<td>Commencement</td>
								<td className="text-right" style={{ width: "15%" }}>
									€2,040
								</td>
							</tr>
							<tr>
								<td>Interim</td>
								<td className="text-right" style={{ width: "15%" }}>
									€2,040
								</td>
							</tr>
							<tr>
								<td>Final Payment</td>
								<td className="text-right" style={{ width: "15%" }}>
									€2,040
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="privacy-policy-content pt-4">
					<h4 className="title">
						SEAI Grant Deferral Payment Policy Example (Grant to payable
						Churchfield Home Services)
					</h4>
					<table className="table-auto app-table w-full">
						<tbody>
							<tr>
								<td>Total Cost of Works</td>
								<td className="text-right" style={{ width: "15%" }}>
									€7,000
								</td>
							</tr>
							<tr>
								<td>Less Discount</td>
								<td className="text-right" style={{ width: "15%" }}>
									€200
								</td>
							</tr>
							<tr>
								<td>
									Deposit and subsequent payments calculated using this amount
								</td>
								<td className="text-right" style={{ width: "15%" }}>
									€6,800
								</td>
							</tr>
							<tr>
								<td>Deposit calculated at 10%</td>
								<td className="text-right" style={{ width: "15%" }}>
									€680
								</td>
							</tr>
							<tr>
								<td colSpan={2}>
									<b>Subsequent payments</b>
								</td>
							</tr>
							<tr>
								<td>Commencement</td>
								<td className="text-right" style={{ width: "15%" }}>
									€2,040
								</td>
							</tr>
							<tr>
								<td>Interim</td>
								<td className="text-right" style={{ width: "15%" }}>
									€2,580
								</td>
							</tr>
							<tr>
								<td>
									Final Payment (SEAI Grant payable to Churchfield Home
									Services)
								</td>
								<td className="text-right" style={{ width: "15%" }}>
									€1,500
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="privacy-policy-content pt-5">
					<h4 className="title">Accepted Payment Methods</h4>
					<p>
						Churchfield Home Services aims to provide customers with maximum
						choice when making a payment which includes:
					</p>

					<p className="font-bold text-[#204971] !pb-0">EFT Payments</p>
					<p>
						EFT payments can be made online; our bank details are available upon
						request from our Accounts department. Payment should be referenced
						using the number on your quotation documentation (Example:
						CHS-019-12345).
					</p>

					<p className="font-bold text-[#204971] !pb-0">Online Payments</p>
					<p>
						Online payments are limited to deposit payments and 30% subsequent
						payments. These are restricted to accepting debit card transactions
						only.
					</p>
					<p className="font-bold text-[#204971] !pb-0">Debit Card Payment</p>
					<p>
						Debit Cards can be used to make payment by contacting a member of
						our Customer Care Team from Monday-Thursday, 8 am – 5 pm and Friday,
						8 am – 4 pm, by calling 096-38555.
					</p>
					<p className="font-bold text-[#0d0d0d]">
						Please note: We do not accept payment via Credit Card.
					</p>

					<p className="font-bold text-[#204971] !pb-0">Cheque Payment</p>
					<p>Post a signed cheque with a copy of the invoice to:</p>
					<p>
						<b className="font-bold text-[#0d0d0d]">
							Churchfield Home Services, Crossmolina Business Park, Ballina
							Road, Crossmolina, Co Mayo, F26 E9A0
						</b>{" "}
						<br />
						All payments must be referenced using the unique quotation number
						(Example: CHS-019-12345).
					</p>

					<p className="font-bold text-[#204971] !pb-0">Cash Payment</p>
					<p>
						Cash payments can be made through any AIB branch nationwide by using
						our bank details, which are available upon request from our Accounts
						department. Payments should be referenced using the number on your
						quotation documentation (Example: CHS-019-12345).
					</p>
					<p className="font-bold text-[#204971] !pb-0">Refund Policy</p>
					<p>
						Due to the nature of the products and services provided by
						Churchfield Home Services, we cannot provide refunds or exchanges
						however if a customer requests a change to the product or services
						provided as part of the installation in advance of the installation
						taking place, or in advance of Churchfield Homer Services ordering
						any special purpose items*, all steps will be taken to amend the
						customer quotations as required.
					</p>
					<p>
						All amendments made following a deposit being paid will be processed
						as a variation to the contract customer quotation.
					</p>
					<p>
						* Special order items which have been ordered in advance of the
						change being requested that cannot be returned by Churchfield Home
						Services are not able to be credited to a customer’s quotation.
					</p>
					<p className="font-bold text-[#204971] !pb-0">Late Payment Fee</p>
					<p>
						Churchfield Home Services allows five working days to pay invoices
						due. We understand that customers require the necessary time to make
						payment for monies due, however, in extreme circumstances where a
						payment is in arrears for more than 60 days of the payment being
						due, the account will be classified as past due.
					</p>
					<p>
						In the event of a late payment, a late payment charge of 1.5% per
						month, translating to 18% per annum, will be added to all
						outstanding amounts due and will be applied from the due date to the
						date the payment is received. Each customer’s statement shows the
						date the invoice is issued and the date by which payment must be
						made to avoid the late payment charge.
					</p>
					<p className="font-bold text-[#204971] !pb-0">
						Informal Non-Payment Procedure
					</p>
					<p>
						An informal approach can often resolve difficult situations with the
						minimum of conflict and stress for the individuals involved and is
						always the first approach to be adopted when such instances arise.
					</p>
					<p>
						Where an instant of non-payment occurs, a member of our Customer
						Care Team will contact the customer directly within 30 days of the
						payment being due to seek the precise reason for non-payment and
						seek an efficient resolution to resolve the matter to both parties
						satisfaction.
					</p>
					<p>
						In the case where the non-payment is over 60 days in arrears, the
						matter will be referred to the company’s internal Financial
						Controller to review and will follow the procedure as outlined below
						to resolve the matter in a clear, transparent, and equitable manner.
					</p>
					<p>
						The client will be contacted directly to notify them that their
						account has been referred to the company’s Financial Controller and
						the company’s procedure for non-payment will be clearly explained.
					</p>
					<p>
						The Financial Controller will then seek to investigate the reason
						for the non-payment by thoroughly investigating all the
						documentation, correspondence and customer statements concerning the
						matter.
					</p>
					<p>
						Once the investigation is complete, the Financial Controller will
						contact the customer and inform them of the findings and seek an
						amicable resolution to the matter which considers all facts of the
						case. When a successful resolution is reached, the matter will be
						finalized and closed.
					</p>
					<p>
						Where the resolution is not accepted, the customer will be formally
						offered the resolution without prejudice to decide to decline or
						accept before the matter is escalated to the Formal Non-Payment
						Procedure.
					</p>
					<p className="font-bold text-[#204971] !pb-0">
						Formal Non-Payment Procedure
					</p>
					<p>
						A formal approach to the resolution of non-payments will only be
						taken once the company’s internal Informal Non-Payment Procedure has
						been exhausted and the non-payment is more than 90 days in arrears.
					</p>
					<p>
						In the case where the non-payment is over 90 days in arrears, the
						following procedure is followed.
					</p>
					<p>
						The client will receive formal notification that their account is
						over 90 days in arrears and that the matter has been escalated to
						the company’s Formal Non-Payment Procedure for processing.
					</p>
					<p>
						The client will receive a formal statement of their account with a
						copy of all supporting documentation with a final demand to make
						payment within the subsequent 7 days.
					</p>
					<p>
						Should payment not be received within the following 7 days, the
						matter will be referred to an approved external debt collection
						agency for collection.
					</p>
					<p>
						The client will be held liable for all subsequent legal and
						consultancy costs associated with the collection of the debt
						including all subsequent late fees and interest due accruing on the
						debt.
					</p>

					<p className="font-bold text-[#204971] !pb-0">Contact Information</p>
					<p>
						For any reason, all customers can contact Churchfield Home Services
						at the below address.
					</p>
					<p>
						Churchfield Home Services,
						<br />
						Crossmolina Business Park,
						<br />
						Ballina Road,
						<br />
						Crossmolina,
						<br />
						Co. Mayo
						<br />
						F26 E9A0
						<br />
						Ph: 096-38555
					</p>
					<p>Customers can also make contact by email as follows:</p>
					<div className="address-list">
						<p>
							<span>Accounts</span>
							<Link
								className="text-link underline text-[#08a8ff]"
								href="mailto:accounts@churchfieldhomeservices.ie"
							>
								accounts@churchfieldhomeservices.ie
							</Link>
						</p>
						<p>
							<span>Quality & Customer Care</span>
							<Link
								className="text-link underline text-[#08a8ff]"
								href="mailto:customercare@churchfieldhomeservices.ie"
							>
								customercare@churchfieldhomeservices.ie
							</Link>
						</p>
						<p>
							<span>Sales</span>
							<Link
								className="text-link underline text-[#08a8ff]"
								href="mailto:sales@churchfieldhomeservices.ie"
							>
								sales@churchfieldhomeservices.ie
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentPolicyContent;
