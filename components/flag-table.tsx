import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FlagAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Supported Browsers</AccordionTrigger>
        <AccordionContent>
          Please make sure you are using Chrome (dev / canary) version 127 or
          higher.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
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
