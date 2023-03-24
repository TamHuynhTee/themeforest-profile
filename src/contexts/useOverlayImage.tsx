import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

type OverlayImageType = {
  showImage: boolean;
  setShowImage: Dispatch<SetStateAction<boolean>>;
  image: any;
  setImage: Dispatch<SetStateAction<any>>;
  handleReset: () => void;
};

export const OverlayImageContext = createContext<OverlayImageType>({
  image: null,
  setImage: () => null,
  setShowImage: () => null,
  handleReset: () => null,
  showImage: false,
});

type Props = {
  children: ReactNode;
};

function OverlayImageProvider(props: Props) {
  const [showImage, setShowImage] = useState(false);
  const [image, setImage] = useState(null);

  const handleReset = () => {
    setShowImage(false);
    setTimeout(() => {
      setImage(null);
    }, 300);
  };

  return (
    <OverlayImageContext.Provider
      value={{ showImage, setShowImage, image, setImage, handleReset }}
    >
      {props.children}
    </OverlayImageContext.Provider>
  );
}

export default OverlayImageProvider;
