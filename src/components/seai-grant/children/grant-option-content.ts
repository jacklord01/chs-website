export interface GrantOptionContentType {
  name: string;
  description: string;
  condition: string;
}

export const GrantOptionContent: Array<GrantOptionContentType> = [
  {
    name: "One Stop Shop Service",
    description: `
        <div class="iegu-persent">
        <h3>Part funded with SEAI grants</h3>
        <p>Up to 80% of the cost of the upgrade for a typical family home</p>
      </div>

      <h4 class="title">What is included</h4>
      <h6 class="sub-title">One Stop Shops offer homeowners all the services required for a complete home energy upgrade. These registered private operators will manage the entire process for you, from the initial assessment of your home, through to the final BER.</h6>
      <ul class="grantlist">
        <li>Fully managed solution</li>
        <li>Wider range of grants</li>
        <li>Grant values deducted from the cost of works upfront</li>
        <li>Less disruption</li>
      </ul>
      <h4 class="title">Who this is for</h4>
      <h6 class="sub-title">For homeowners and non-corporate landlords whose property or home meets these criteria:</h6>
      <ul class="grantlist">
        <li>Was built and occupied before 2011 for insulation and heating controls</li>
        <li>Was built and occupied before 2011 for renewable systems grants</li>
        <li>Has an existing BER of B3 or lower and must achieve a minimum rating of B2 on work completion, with a 100kWh/m2/year or better improvement on the BER primary energy value</li>
        <li>
        Has not previously received grants for the same home energy upgrades
        </li> 
      </ul>
      <p style="color: #0D0D0D">Approved Housing Bodies are also eligible for the scheme, but the grant amounts available are different.</p>
      <h4 class="title">Criteria for homes</h4>
      <h6 class="sub-title">
        For homes built and occupied before:
      </h6>

      <ul class="grantlist-criteria pb-[40px]"> 
        <li>2011 for insulation and heating controls</li>
        <li>2011 for heat pumps and renewable systems</li>
      </ul>
    `,
    condition: `
        <h4 class="title">Who can apply</h4>
				<p>The One Stop Shop service is available to homeowners and non-corporate landlords whose property or home meets these criteria:</p>
				<ul>
					<li>Was built and occupied before 2011 for insulation and heating controls</li>
					<li>Was built and occupied before 2011 for renewable systems grants</li>
					<li> Has an existing BER of B3 or lower and must achieve a minimum rating of B2 on work completion, with a 100kWh/m2/year or better improvement on the BER primary energy value</li>
					<li>Has not previously received grants for the same home energy upgrades</li>
				</ul>
				<p class="pt-3">Approved Housing Bodies are also eligible for the scheme, but the grant amounts available are different. </p>
    `,
  },
  {
    name: "Individual Energy Upgrade Grants",
    description: `
                <div class="iegu-persent">
                  <h3>Manage your Energy Upgrades</h3>
                  <p>
                    Homeowners and private landlords often choose to manage
                    their own home energy upgrades. This gives them the
                    flexibility to take a step-by-step approach, carrying out
                    different upgrades over time and to suit their budgets. With
                    this grant route, homeowners select a SEAI registered
                    contractor and apply for a grant through our easy-to-use
                    online application system. The grant is paid directly to the
                    homeowner, once works have been completed and grant
                    paperwork submitted.
                  </p>
                </div>

                <h4 class="title">What is included</h4>
                <h6 class="sub-title">
                  Homeowners manage their upgrades including:
                </h6>
                <ul class="grantlist">
                  <li>Contractor selection</li>
                  <li>Grant application</li>
                  <li>Contractor works</li>
                  <li>Follow up BER</li>
                </ul>
                <h4 class="title">Who this is for</h4>
                <h6 class="sub-title">
                  For homeowners and landlords who want:
                </h6>
                <ul class="grantlist">
                  <li>Individual energy upgrades</li>
                  <li>To manage their own project</li>
                  <li>To apply for the grant themselves</li>
                  <li>
                    To pay for full cost of works and claim <br /> grants
                    afterwards
                  </li>
                </ul>

                <h4 class="title">Criteria for homes</h4>
                <h6 class="sub-title">
                  For homes built and occupied before:
                </h6>

                <ul class="grantlist-criteria pb-[40px]">
                  <li>2011 for insulation and heating controls</li>
                  <li>2021 for heat pumps and renewable systems</li>
                </ul>
              `,
    condition: `
				<h4 class="title">Who can apply</h4>
				<p>
					All homeowners, including landlords whose homes were built and
					occupied before 2011 can apply. This is defined as the date your
					electricity meter was installed. Grant funding can only be issued once
					per property for each type of works. This means that any property that
					previously availed of a wall insulation grant via the Better Energy
					Homes scheme or any other government scheme cannot receive additional
					support for further wall insulation works.
				</p>

				<h4 class="title">Before you apply</h4>
				<p class="!p-0">
					<b>Building Regulations (Part L)</b>
				</p>
				<p class="!pb-2">
					Part L of the Building Regulations require that after any alteration
					to a minimum of 25% of your home’s surface area, either:
				</p>
				<ul>
					<li>your home achieves a minimum B2 BER rating</li>
					<li>
						your heating system and attic insulation comply with the Building
						Regulation standards
					</li>
				</ul>
				<p>
					If you are applying for an SEAI grant for External or Internal Wall
					Insulation you are required to comply with these Building Regulations
					as a condition of your grant payment.
				</p>
				<p class="!p-0">
					<b>Planning considerations</b>
				</p>
				<p>
					In some cases, External Insulation may require planning permission.
					For example, with protected structures, in architectural conservation
					areas or where the works result in an alteration to the front profile
					of the property. Please check with your registered contractor or local
					planning authority. Planning permission is not required for internal
					or cavity insulation.
				</p>`,
  },

  {
    name: "Fully Funded Energy Upgrades",
    description: `
        <div class="iegu-persent">
        <h3>Fully funded by SEAI</h3>
        <p>All home upgrade costs covered</p>
      </div>

      <h4 class="title">What is included</h4>
      <h6 class="sub-title">An SEAI surveyor will recommend upgrades that are suitable for your property. These will be based on factors such as its age, size, existing heating system and condition. Upgrades offered under the scheme include:</h6>
      <ul class="grantlist">
        <li>Attic Insulation</li>
        <li>Cavity Wall Insulation</li>
        <li>External Wall Insulation</li>
        <li>Internal Wall Insulation</li> 
      </ul>
      <p>Secondary work such as lagging jackets, draught proofing and energy efficient lighting New heating systems and windows are occasionally recommended</p>
      <h4 class="title">Who this is for</h4>
      <h6 class="sub-title">For Homeowners and Landlords</h6>
      <ul class="grantlist">
        <li>Fuel Allowance</li> 
        <li> Job Seekers Allowance</li> 
        <li>Working Family Payment</li> 
        <li>One-Parent Family Payment</li> 
        <li>Domiciliary Care Allowance</li> 
        <li>Carers Allowance</li> 
        <li>Disability Allowance for over six  months with a child under seven</li>  
      </ul>
      <h4 class="title">Criteria for homes</h4>
      <h6 class="sub-title">
        For homes built and occupied before:
      </h6>

      <ul class="grantlist-criteria pb-[40px]">
        <li>2006 for insulation and heating controls</li>
        <li>2006 for heat pumps and renewable systems</li>
      </ul>
    `,
    condition: `
        <h4 class="title">Who can appy</h4> 
				<p class="!p-2"> <b>1. You must own and live in your own home</b> </p> 
				<ul>
					<li>This must be your main residence, where you live most days of the week</li>
				</ul> 
				<p class="!p-2"> <b>2. Your home was built and occupied before 2006</b> </p> 
				<ul>
					<li>This means the ESB meter was connected and property lived in prior to 2006</li>
				</ul> 
				<p class="!p-2"> <b>3. You receive one of the following welfare payments</b> </p> 
				<ul>
					<li>Job Seekers Allowance for over six months and have a child under seven years of age </li>
					<li>Working Family Payment </li>
					<li>One-Parent Family Payment </li>
					<li>Domiciliary Care Allowance</li>
					<li>Carers Allowance and live with the person you are caring for </li>
					<li>Disability Allowance for over six months and have a child under seven years of age</li>
				</ul>  

        <h4 class="title">How the service works</h4> 
        <ul>
					<li>'You apply to SEAI' CHS do not check to see if someone is eligible</li>
					<li>If you are eligible, an SEAI surveyor surveys your home to make upgrade recommendations</li>
					<li>A contractor is appointed from SEAI's panel to carry out the upgrade works</li>
					<li>After the works are completed our energy assessment team will carry out a BER assessment. There may also be quality inspections.</li>
				</ul> 
    `,
  }
];
