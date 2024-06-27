import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink } from "./external-link";

interface FlagAccordionProps {
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export function FlagAccordion({ value, setValue }: FlagAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      value={value}
      onValueChange={setValue}
    >
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
          <div className="flex items-center justify-center">
            <div className="space-y-6">
              <p className="">
                Once your browser is installed, ensure the following flags are
                set:
              </p>
              <ol className="grid gap-4 counter-reset:step">
                {flags.map((f, i) => (
                  <li
                    key={"flag_" + i.toString()}
                    className="flex items-center gap-4 text-sm"
                  >
                    <div className="flex h-6 w-6 text-xs items-center justify-center rounded-full bg-primary text-primary-foreground counter:step">
                      {i + 1}
                    </div>
                    <div className="w-full">
                      <h4 className="font-medium">
                        Step {i + 1}: {f.flag}
                      </h4>
                      <p className="text-muted-foreground">{f.instruction}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

const flags: { flag: string; instruction: string }[] = [
  {
    flag: "chrome://flags/#prompt-api-for-gemini-nano",
    instruction: "Select 'Enabled'",
  },
  {
    flag: "chrome://flags/#optimization-guide-on-device-model",
    instruction: "Select 'Enabled BypassPrefRequirement'",
  },
  {
    flag: "chrome://components",
    instruction: `Click 'Check for Update' on Optimization Guide On Device Model to download the model. If you don't see Optimization Guide, ensure you have set the flags correctly above, relaunch your browser, and refresh the page.`,
  },
];
