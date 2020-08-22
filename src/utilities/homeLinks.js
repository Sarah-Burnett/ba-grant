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
	}
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
	}
];
