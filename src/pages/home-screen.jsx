import { BookOpen01, Check, Copy01, Cube01, HelpCircle,DownloadCloud02, Edit01, Trash01 ,ChevronDown, Container, LayersTwo01, LogOut01, Settings01, User01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";

// import { CheckCircle } from "@untitledui/icons";
// import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
// import { ButtonUtility } from "@/components/base/buttons/button-utility";
// import { SocialButton } from "@/components/base/buttons/social-button";
// import { AppStoreButton, GalaxyStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons";
// import { ButtonGroup, ButtonGroupItem } from "@/components/base/button-group/button-group";
// import { BadgeWithDot } from "@/components/base/badges/badges";
// import { Tag, TagGroup, TagList } from "@/components/base/tags/tags";

// import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
// import { Dropdown } from "@/components/base/dropdown/dropdown";
// import { PinInput } from "@/components/base/pin-input/pin-input";
// import { PinInput } from "@/components/base/pin-input/pin-input";
// import { Toggle } from "@/components/base/toggle/toggle";
// import { Checkbox } from "@/components/base/checkbox/checkbox";
// import { RadioButton, RadioGroup } from "@/components/base/radio-buttons/radio-buttons";
// import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
// import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";
// import { ProgressBar } from "@/components/base/progress-indicators/progress-indicators";
// import { Slider } from "@/components/base/slider/slider";
// import CreditCard from '@/components/shared-assets/credit-card/credit-card';
// import { QRCode, GradientScan } from '@/components/shared-assets/qr-code';

// import { Illustration } from "@/components/shared-assets/illustrations";
// import { RatingBadge } from "@/components/foundations/rating-badge";

export const HomeScreen = () => {
  return <div className="flex h-dvh flex-col">
            <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-4">
                <div className="relative flex size-28 items-center justify-center">
                    <UntitledLogoMinimal className="size-10" />
                </div>
                {/* <Button className="mt-6" variant="primary" size="lg" onClick={()=>{console.log("Click")}}>Get Started</Button> */}

                {/* <FeaturedIcon color="brand" icon={CheckCircle} theme="light" size="lg" />
                <FeaturedIcon color="brand" icon={CheckCircle} theme="gradient" size="lg" />
                <FeaturedIcon color="brand" icon={CheckCircle} theme="dark" size="lg" />
                <FeaturedIcon color="gray" icon={CheckCircle} theme="modern" size="lg" />
                <FeaturedIcon color="gray" icon={CheckCircle} theme="modern-neue" size="lg" />
                <FeaturedIcon color="brand" icon={CheckCircle} theme="outline" size="lg" /> */}

                {/* <div className="flex w-90 flex-col gap-3">
                    <SocialButton social="google" theme="brand">
                        Sign in with Google
                    </SocialButton>
                    <SocialButton social="facebook" theme="brand">
                        Sign in with Facebook
                    </SocialButton>
                    <SocialButton social="apple" theme="brand">
                        Sign in with Apple
                    </SocialButton>
                </div> */}

                {/* <div className="flex flex-col items-start gap-3 md:flex-row">
                    <GooglePlayButton size="md" />
                    <AppStoreButton size="md" />
                    <GalaxyStoreButton size="md" />
                </div> */}

                {/* <div className="flex items-start gap-1">
                    <ButtonUtility size="sm" color="tertiary" tooltip="Copy" icon={Copy01} />
                    <ButtonUtility size="sm" color="tertiary" tooltip="Download" icon={DownloadCloud02} />
                    <ButtonUtility size="sm" color="tertiary" tooltip="Delete" icon={Trash01} />
                    <ButtonUtility size="sm" color="tertiary" tooltip="Edit" icon={Edit01} />
                </div> */}

                  {/* <ButtonGroup selectedKeys={[]}>
                    <ButtonGroupItem id="archive">Archive</ButtonGroupItem>
                    <ButtonGroupItem id="edit">Edit</ButtonGroupItem>
                    <ButtonGroupItem id="delete">Delete</ButtonGroupItem>
                </ButtonGroup> */}

                {/* <BadgeWithDot type="pill-color" color="brand">
                    Label
                </BadgeWithDot>
                <BadgeWithDot type="color" color="brand">
                    Label
                </BadgeWithDot>
                <BadgeWithDot type="modern" color="brand">
                    Label
                </BadgeWithDot> */}

                {/* <TagGroup label="Tags" size="md">
                    <TagList className="flex gap-4">
                        <Tag>Label</Tag>
                        <Tag avatarSrc="https://www.untitledui.com/images/flags/AU.svg">Label</Tag>
                        <Tag avatarSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80">Label</Tag>
                        <Tag dot={true}>Label</Tag>
                    </TagList>
                </TagGroup> */}

                {/* <Dropdown.Root>
                    <Button className="group" color="secondary" iconTrailing={ChevronDown}>
                        Account
                    </Button>
            
                    <Dropdown.Popover>
                        <div className="flex gap-3 border-b border-secondary p-3">
                            <AvatarLabelGroup
                                size="md"
                                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                                status="online"
                                title="Olivia Rhye"
                                subtitle="olivia@untitledui.com"
                            />
                        </div>
                        <Dropdown.Menu>
                            <Dropdown.Section>
                                <Dropdown.Item addon="⌘K->P" icon={User01}>
                                    View profile
                                </Dropdown.Item>
                                <Dropdown.Item addon="⌘S" icon={Settings01}>
                                    Settings
                                </Dropdown.Item>
                            </Dropdown.Section>
                            <Dropdown.Separator />
                            <Dropdown.Section>
                                <Dropdown.Item icon={LayersTwo01}>Changelog</Dropdown.Item>
                                <Dropdown.Item icon={HelpCircle}>Support</Dropdown.Item>
                                <Dropdown.Item icon={Container}>API</Dropdown.Item>
                            </Dropdown.Section>
                            <Dropdown.Separator />
                            <Dropdown.Section>
                                <Dropdown.Item addon="⌥⇧Q" icon={LogOut01}>
                                    Log out
                                </Dropdown.Item>
                            </Dropdown.Section>
                        </Dropdown.Menu>
                    </Dropdown.Popover>
                </Dropdown.Root> */}

                {/* <PinInput size="md">
                    <PinInput.Label>Secure code</PinInput.Label>
                    <PinInput.Group maxLength={6}>
                        <PinInput.Slot index={0} />
                        <PinInput.Slot index={1} />
                        <PinInput.Slot index={2} />
                        <PinInput.Separator />
                        <PinInput.Slot index={3} />
                        <PinInput.Slot index={4} />
                        <PinInput.Slot index={5} />
                    </PinInput.Group>
                    <PinInput.Description>This is a hint text to help user.</PinInput.Description>
                </PinInput> */}

                {/* <Toggle label="Remember me" hint="Save my login details for next time." size="sm" /> */}

                {/* <Checkbox label="Remember me" hint="Save my login details for next time." size="sm" /> */}

                {/* <RadioGroup aria-label="Pricing plans" defaultValue="basic">
                    <RadioButton label="Basic plan" hint="Up to 10 users and 20 GB data." value="basic" />
                    <RadioButton label="Business plan" hint="Up to 20 users and 40 GB data." value="business" />
                    <RadioButton label="Enterprise plan" hint="Unlimited users and unlimited data." value="enterprise" />
                </RadioGroup> */}

                {/* <AvatarLabelGroup
                    size="md"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    alt="Olivia Rhye"
                    title="Olivia Rhye"
                    subtitle="olivia@untitledui.com"
                /> */}

                {/* <Tooltip title="This is a tooltip">
                    <TooltipTrigger className="group relative flex cursor-pointer flex-col items-center gap-2 text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover">
                        <HelpCircle className="size-4" />
                    </TooltipTrigger>
                </Tooltip> */}

                {/* <ProgressBar min={0} max={100} value={81} /> */}

                {/* <Slider className="w-2xl" defaultValue={[0, 25]} /> */}
                {/* <div className="flex items-center justify-center">
                    <CreditCard type="brand-dark" company="Untitled." cardNumber="1234 1234 1234 1234" cardHolder="OLIVIA RHYE" cardExpiration="06/28" />
                </div> */}

                {/* <div className="relative flex w-full items-center justify-center max-w-60 aspect-square">
                    <QRCode value="https://www.untitledui.com/" size="md" />
                    <GradientScan />
                </div> */}

                {/* <Illustration type="cloud" size="lg" />
                <Illustration type="box" size="sm" />
                <Illustration type="box" size="md" />
                <Illustration type="documents" size="md" /> */}


                {/* <RatingBadge rating={3} title="Best Design Tool" subtitle="2,000+ reviews" /> */}
            </div>
        </div>;
};