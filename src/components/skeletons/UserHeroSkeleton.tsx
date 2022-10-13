import { HTMLAttributes } from 'react';

import AvatarSceleton from 'components/skeletons/AvatarSceleton';
import Skeleton from 'components/skeletons/Skeleton';

interface Props extends HTMLAttributes<HTMLDivElement> {}

function UserHeroSkeleton({ className, ...props }: Props) {
  return (
    <div className={`flex flex-col items-center mb-8 ${className}`} {...props}>
      <AvatarSceleton className="w-32 h-32 mb-4 mx-auto" />
      <Skeleton className="h-7 w-48 mb-2" />
      <Skeleton className="h-6 w-40" />
    </div>
  );
}
export default UserHeroSkeleton;
