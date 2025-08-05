import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComboboxProps {
    items: string[];
    selected: string;
    onChange: (value: string) => void;
    placeholder: string;
}

const Combobox: React.FC<ComboboxProps> = ({ items, selected, onChange, placeholder }) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between text-base py-3 rounded-xl bg-white text-gray-800 hover:bg-gray-50"
                >
                    {selected ? selected : placeholder}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command>
                    <CommandInput placeholder={`Search ${placeholder.toLowerCase()}...`} />
                    <CommandEmpty>No match found.</CommandEmpty>
                    <CommandGroup className="max-h-60 overflow-y-auto">
                        {items.map((item) => (
                            <CommandItem
                                key={item}
                                value={item}
                                onSelect={(value: string) => {
                                    onChange(value);
                                    setOpen(false);
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        selected === item ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {item}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default function QuickPriceCalculator() {
    const [brand, setBrand] = useState<string>('');
    const [model, setModel] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [condition, setCondition] = useState<string>('');
    const [price, setPrice] = useState<number | null>(null);

    const carBrands: string[] = [
        "Maruti Suzuki",
        "Hyundai",
        "Tata Motors",
        "Mahindra",
        "Honda",
        "Toyota",
        "Kia",
        "Renault",
        "Volkswagen",
        "Nissan",
    ];

    const currentYear: number = new Date().getFullYear();
    const manufacturingYears: string[] = Array.from(
        { length: currentYear - 1999 },
        (_, i) => (2000 + i).toString()
    );

    const conditions: string[] = ["Excellent", "Good", "Fair", "Poor"];

    const calculatePrice = (): void => {
        const vehicleYear = parseInt(year, 10);

        if (isNaN(vehicleYear)) {
            alert('Please select a valid manufacturing year.');
            return;
        }

        const vehicleAge = currentYear - vehicleYear;

        let baseScrapValue = 50000; // Start with ₹50,000

        // Reduce ₹1,500 per year after 5 years
        if (vehicleAge > 5) {
            baseScrapValue -= (vehicleAge - 5) * 1500;
        }

        // Adjust based on condition
        let conditionFactor = 1;
        switch (condition) {
            case 'Excellent':
                conditionFactor = 1.1;
                break;
            case 'Good':
                conditionFactor = 1.0;
                break;
            case 'Fair':
                conditionFactor = 0.9;
                break;
            case 'Poor':
                conditionFactor = 0.8;
                break;
            default:
                conditionFactor = 1;
        }

        const calculatedPrice = baseScrapValue * conditionFactor;

        // Ensure minimum value of ₹30,000
        const finalPrice = Math.max(calculatedPrice, 30000);

        setPrice(finalPrice);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-orange-100 to-orange-300 px-4">
            <div className="w-full max-w-md bg-white/60 backdrop-blur-md shadow-2xl rounded-3xl p-8 space-y-6 border border-white/30">
                <h3 className="text-3xl font-extrabold text-center text-gray-800">🚗 Scrap Car Price Calculator</h3>

                <div className="space-y-4">
                    <Combobox
                        items={carBrands}
                        selected={brand}
                        onChange={setBrand}
                        placeholder="Select Car Brand"
                    />

                    <Input
                        placeholder="Car Model (eg. Swift, Santro)"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className="text-base py-3 rounded-xl bg-white text-gray-800"
                    />

                    <Combobox
                        items={manufacturingYears}
                        selected={year}
                        onChange={setYear}
                        placeholder="Select Manufacturing Year"
                    />

                    <Combobox
                        items={conditions}
                        selected={condition}
                        onChange={setCondition}
                        placeholder="Select Condition"
                    />

                    <Button
                        className="w-full text-lg py-3 rounded-xl bg-orange-500 hover:bg-orange-600 transition-transform active:scale-95"
                        onClick={calculatePrice}
                    >
                        Get Instant Quote
                    </Button>
                </div>

                {price !== null && (
                    <div className="mt-6 space-y-3 animate-in fade-in zoom-in">
                        <div className="bg-green-200/80 text-green-900 p-5 rounded-xl text-center text-2xl">
                            💰 Estimated Scrap Value: ₹{price.toLocaleString()}
                        </div>
                        <p className="text-center text-sm text-gray-700">
                            *Note: This is an estimation based on general scrap policy. Final price may vary depending on vehicle condition, documents, and market demand.
                        </p>
                        <div className="text-center">
                            <a
                                href="tel:+919210450410"  // <-- Change to your actual number
                                className="inline-block mt-2 text-orange-600 font-semibold underline hover:text-orange-700 transition"
                            >
                                📞 Call Us to Get Final Quote
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}