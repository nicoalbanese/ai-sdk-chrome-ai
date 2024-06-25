import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink } from "./external-link";

export function FlagAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Demo</AccordionTrigger>
        <AccordionContent>
          <video src="pineapplepizza.mp4" autoPlay loop />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Supported Browsers</AccordionTrigger>
        <AccordionContent>
          Please make sure you are using Chrome (
          <ExternalLink href="https://www.google.com/chrome/dev/?extra=devchannel">
            Dev
          </ExternalLink>{" "}
          /{" "}
          <ExternalLink href="https://www.google.com/chrome/canary/">
            Canary
          </ExternalLink>
          ) version 127 or higher.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Necessary Experimental Flags</AccordionTrigger>
        <AccordionContent>
          <p>Once installed, ensure the following flags are set:</p>

          <ul>
            <li>
              <strong>chrome://flags/#prompt-api-for-gemini-nano</strong>:
              Enabled
            </li>
            <li>
              <strong>
                chrome://flags/#optimization-guide-on-device-model
              </strong>
              : Enabled BypassPrefRequirement
            </li>
            <li>
              <strong>chrome://components/</strong>: Click Optimization Guide On
              Device Model to download the model.
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
