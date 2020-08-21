import { TutorialLink } from "../components/home/TutorialLink";
import { ExternalLink } from "../components/home/ExternalLink";

export const sharepoint = [
	{
		name: "Getting started",
		url: "/sharepoint-getting-started",
		Component: TutorialLink,
		state: "sharepointIntro",
	},
	{
		name: "Data storage",
		url: "/data-storage",
		Component: TutorialLink,
		state: "dataStorage",
	},
	{
		name: "Using macros",
		url: "/using-storage",
		Component: TutorialLink,
		state: "macros",
	},
];

export const sona = [
	{
		name: "Getting started",
		url: "/sona-getting-started",
		Component: TutorialLink,
		state: "sonaIntro",
	},
	{
		name: "Lab Booking",
		url: "https://cles-mrbs.exeter.ac.uk/mdc/day.php",
		Component: ExternalLink,
		state: "labBooking",
	},
];

export const qualtrics = [
	{
		name: "Getting started",
		url: "/qualtrics-getting-started",
		Component: TutorialLink,
		state: "qualtricsIntro",
	},
	{
		name: "Export data",
		url: "/qualtrics-export",
		Component: TutorialLink,
		state: "qualtricsExport",
	},
	{
		name: "Support pages",
		url:
			"https://www.qualtrics.com/support/survey-platform/my-projects/my-projects-overview/",
		Component: ExternalLink,
		state: "qualtricsSupport",
	},
	{
		name: "Live survey",
		url: "https://exetercles.eu.qualtrics.com/jfe/form/SV_7aK3Ivy3A4i3A57",
		Component: ExternalLink,
		state: "qualtricsSurvey",
	},
];

export const eprime = [
	{
		name: "Testing",
		url: "/eprime-testing",
		Component: TutorialLink,
		state: "eprimeTesting",
	},
	{
		name: "Preprocessing",
		url: "/eprime-preprocess",
		Component: TutorialLink,
		state: "eprimePreprocess",
	},
	{
		name: "Eprime guide",
		url:
			"https://universityofexeteruk.sharepoint.com/sites/BA_Regulatory_Focus_and_Rumination/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FBA%5FRegulatory%5FFocus%5Fand%5FRumination%2FShared%20Documents%2F2020%20documents%20and%20protocol%2FE%2DPrime%20scripts%2FEPrime2%2E0GettingStartedGuide%2Epdf&parent=%2Fsites%2FBA%5FRegulatory%5FFocus%5Fand%5FRumination%2FShared%20Documents%2F2020%20documents%20and%20protocol%2FE%2DPrime%20scripts",
		Component: ExternalLink,
		state: "eprimeGuide",
	},
	{
		name: "Support pages",
		url: "https://support.pstnet.com/hc/en-us/categories/204686967-E-Prime",
		Component: ExternalLink,
		state: "eprimeSupport",
	},
];

export const psychophys = [
	{
		name: "Testing",
		url: "/psychophys-testing",
		Component: TutorialLink,
		state: "psychophysTesting",
	},
	{
		name: "Preprocessing Part 1",
		url: "/psychophys-preprocess-p1",
		Component: TutorialLink,
		state: "psychophysPreprocess1",
	},
	{
		name: "Preprocessing Part 2",
		url: "/psychophys-preprocess-p2",
		Component: TutorialLink,
		state: "psychophysPreprocess2",
	},
	{
		name: "AcqKnowledge guide",
		url:
			"https://www.biopac.com/wp-content/uploads/acqknowledge-4-software-guide.pdf",
		Component: ExternalLink,
		state: "psychophysGuide",
	},
];
