import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { PiCopyDuotone } from 'react-icons/pi';

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  return (
    <button onClick={handleCopy} className="flex items-center text-sm text-white transition cursor-pointer ml-1">
      {copied ? (
        <>
          <FaCheck size={12} />
        </>
      ) : (
        <>
          <PiCopyDuotone size={12} />
        </>
      )}
    </button>
  );
}
