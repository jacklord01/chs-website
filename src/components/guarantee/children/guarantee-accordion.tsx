import Link from "next/link";
import React, { useState } from "react";

interface GuaranteeAccordionProps {}

const GuaranteeAccordion: React.FC<GuaranteeAccordionProps> = () => {
	const [services, setServices] = useState<typeof accordionData>(accordionData);

	const onServiceClick = (id: number) => {
		setServices(
			[...services].map(x => {
				x.isShow = x.id == id && !x.isShow;
				return x;
			})
		);
	};

	const onServiceChildClick = (id: number, cid: number) => {
		setServices(
			[...services].map(x => {
				if (x.id == id) {
					x.children = x.children.map(y => {
						y.isShow = y.id == cid && !y.isShow;
						return y;
					});
				}
				return x;
			})
		);
	};

	return (
		<div className="guarantee-accordion bg-[#f3f3f3] pb-[95px]">
			<div className="container mx-auto px-[16px]">
				<div className="border-t border-[#d2d2d2]">
					{services.map(item => (
						<div key={item.id} className="accordion-item bg-white">
							<button
								className={`card-title ${item.isShow ? "active" : ""}`}
								onClick={() => onServiceClick(item.id)}
							>
								{item.title}
								<div className="icon">
									<svg width="25" viewBox="0 0 25 26" fill="currentColor">
										<use href="/images/sprite.svg#svg-plus"></use>
									</svg>
								</div>
							</button>
							<div
								className="card-body !p-0"
								style={{
									display: item.isShow ? "block" : "none",
								}}
							>
								{item.children.map(cItem => (
									<div className="accordion-item-children" key={cItem.id}>
										<button
											className={`card-title-children ${
												cItem.isShow ? "active" : ""
											}`}
											onClick={() => onServiceChildClick(item.id, cItem.id)}
										>
											{cItem.heading}
											<div className="icon">
												<svg width="12" viewBox="0 0 10 6" fill="currentColor">
													<use href="/images/sprite.svg#svg-chevron-down"></use>
												</svg>
											</div>
										</button>
										<div
											className="card-body"
											style={{
												display: cItem.isShow ? "block" : "none",
											}}
										>
											<p className="pb-4">{cItem.details}</p>
											{cItem.buttonText && cItem.buttonLink ? (
												<Link
													href={cItem.buttonLink}
													className="btn btn-primary outline secondary-hover sm:!px-6"
												>
													{cItem.buttonText}
												</Link>
											) : (
												""
											)}
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default GuaranteeAccordion;

interface accordionType {
	id: number;
	title: string;
	isShow: boolean;
	children: {
		id: number;
		isShow: boolean;
		heading: string;
		details: string;
		buttonText?: string;
		buttonLink?: string;
	}[];
}

const accordionData: Array<accordionType> = [
	{
		id: 1,
		title: "Wall Insulation",
		isShow: true,
		children: [
			{
				id: 1,
				isShow: true,
				heading: "External Wall Insulation",
				details:
					"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.",
				buttonText: "Read Installation Guarantee",
				buttonLink: "/",
			},
			{
				id: 2,
				isShow: false,
				heading: "Sub Category 01",
				details:
					"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.",
				buttonText: "Read Installation Guarantee",
				buttonLink: "",
			},
			{
				id: 3,
				isShow: false,
				heading: "Sub Category 02",
				details:
					"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.",
				buttonText: "Read Installation Guarantee",
				buttonLink: "",
			},
		],
	},
	{
		id: 2,
		title: "External Wall Insulation",
		isShow: false,
		children: [
			{
				id: 1,
				isShow: true,
				heading: "External Wall Insulation",
				details:
					"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.",
				buttonText: "Read Installation Guarantee",
				buttonLink: "/",
			},
			{
				id: 2,
				isShow: false,
				heading: "Sub Category 01",
				details:
					"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.",
				buttonText: "Read Installation Guarantee",
				buttonLink: "",
			},
			{
				id: 3,
				isShow: false,
				heading: "Sub Category 02",
				details:
					"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.",
				buttonText: "Read Installation Guarantee",
				buttonLink: "",
			},
		],
	},
	{
		id: 3,
		title: "Internal Wall Insulation",
		isShow: false,
		children: [
			{
				id: 1,
				isShow: true,
				heading: "Internal Wall Insulation",
				details:
					"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.",
				buttonText: "Read Installation Guarantee",
				buttonLink: "/",
			},
			{
				id: 2,
				isShow: false,
				heading: "Sub Category 01",
				details:
					"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.",
				buttonText: "Read Installation Guarantee",
				buttonLink: "",
			},
		],
	},
	{
		id: 4,
		title: "Cavity Wall Insulation",
		isShow: false,
		children: [
			{
				id: 1,
				isShow: true,
				heading: "Cavity Wall Insulation",
				details:
					"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.",
				buttonText: "Read Installation Guarantee",
				buttonLink: "/",
			},
			{
				id: 2,
				isShow: false,
				heading: "Sub Category 01",
				details:
					"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.",
				buttonText: "Read Installation Guarantee",
				buttonLink: "",
			},
		],
	},
	{
		id: 5,
		title: "Windows and Doors",
		isShow: false,
		children: [
			{
				id: 1,
				isShow: true,
				heading: "Windows and Doors",
				details:
					"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.",
				buttonText: "Read Installation Guarantee",
				buttonLink: "/",
			},
			{
				id: 2,
				isShow: false,
				heading: "Sub Category 01",
				details:
					"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.",
				buttonText: "Read Installation Guarantee",
				buttonLink: "",
			},
		],
	},
	{
		id: 6,
		title: "Floor Insulation",
		isShow: false,
		children: [
			{
				id: 1,
				isShow: true,
				heading: "Floor Insulation",
				details:
					"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.",
				buttonText: "Read Installation Guarantee",
				buttonLink: "/",
			},
			{
				id: 2,
				isShow: false,
				heading: "Sub Category 01",
				details:
					"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.",
				buttonText: "Read Installation Guarantee",
				buttonLink: "",
			},
		],
	},
	{
		id: 7,
		title: "Ventilation Upgrades",
		isShow: false,
		children: [
			{
				id: 1,
				isShow: true,
				heading: "Ventilation Upgrades",
				details:
					"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.",
				buttonText: "Read Installation Guarantee",
				buttonLink: "/",
			},
			{
				id: 2,
				isShow: false,
				heading: "Sub Category 01",
				details:
					"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.",
				buttonText: "Read Installation Guarantee",
				buttonLink: "",
			},
		],
	},
	{
		id: 8,
		title: "Heating Systems",
		isShow: false,
		children: [
			{
				id: 1,
				isShow: true,
				heading: "Heating Systems",
				details:
					"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.",
				buttonText: "Read Installation Guarantee",
				buttonLink: "/",
			},
			{
				id: 2,
				isShow: false,
				heading: "Sub Category 01",
				details:
					"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.",
				buttonText: "Read Installation Guarantee",
				buttonLink: "",
			},
		],
	},
	{
		id: 9,
		title: "Solar PV",
		isShow: false,
		children: [
			{
				id: 1,
				isShow: true,
				heading: "Solar PV",
				details:
					"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.",
				buttonText: "Read Installation Guarantee",
				buttonLink: "/",
			},
			{
				id: 2,
				isShow: false,
				heading: "Sub Category 01",
				details:
					"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.",
				buttonText: "Read Installation Guarantee",
				buttonLink: "",
			},
		],
	},
	{
		id: 10,
		title: "Roofline Upgrades",
		isShow: false,
		children: [
			{
				id: 1,
				isShow: true,
				heading: "Roofline Upgrades",
				details:
					"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.",
				buttonText: "Read Installation Guarantee",
				buttonLink: "/",
			},
			{
				id: 2,
				isShow: false,
				heading: "Sub Category 01",
				details:
					"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.",
				buttonText: "Read Installation Guarantee",
				buttonLink: "",
			},
		],
	},
];
