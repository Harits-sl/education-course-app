// import { useState } from 'react';
import Label from '../../atoms/Label';
import Input from '../../atoms/Input';

export default function InputPhoneNumber() {
  // const [countryCode, setCountryCode] = useState('+62');

  // const countries = [
  //   { code: '+62', flag: '🇮🇩', label: 'Indonesia' },
  //   { code: '+60', flag: '🇲🇾', label: 'Malaysia' },
  //   { code: '+65', flag: '🇸🇬', label: 'Singapore' },
  // ];

  return (
    <div className="flex flex-col mb-3">
      <Label title="No. Hp" />

      <div className="flex items-center gap-3 sm:gap-6 w-full">
        {/* Select Phone Code */}
        <div class="flex  sm:min-w-0 mt-1 h-12 border border-border rounded-md">
          <div class="bg-base-background border border-border px-2.5 py-3 w-11 h-12">
            <img
              src="/icons/Indonesia_icon.png"
              alt="indonesia"
              className="w-full"
            />
          </div>
          <select
            name="tel"
            id="tel"
            className="grow px-2.5"
          >
            <option value="ID">+62</option>
          </select>
        </div>
        {/* Input nomor HP */}
        <Input
          type="tel"
          name="telphone"
          width="grow min-w-[0] sm:grow-8"
        />
      </div>
    </div>
  );
}
