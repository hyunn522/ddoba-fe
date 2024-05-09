import { useGlobalModal } from '@/components/common-components/global-modal';

import { UserInfoProps } from '@/types/user';

import {
  postEmailAuth,
  postKakaoUserInfo,
  postLocalUserInfo,
} from '@/api/user';
import { useMutation } from '@tanstack/react-query';

import { useNotifyError, useNotifySuccess } from './useToast';

export const useKakaoUserInfo = (data: UserInfoProps) => {
  const { setSuccessModal, setErrorModal } = useGlobalModal();

  const { mutate, isPending, error } = useMutation({
    mutationFn: () => postKakaoUserInfo(data),
    onSuccess: (res) => {
      console.log(res);
      setSuccessModal({
        open: true,
        text: '회원 정보가 등록되었습니다.',
      });
    },
    onError: (err: any) => {
      console.log(err);
      setErrorModal({
        open: true,
        text: '예상치 못한 에러가 발생하였습니다.',
      });
    },
  });
  return { mutate, isPending, error };
};

export const useLocalUserInfo = (data: UserInfoProps) => {
  const { setSuccessModal, setErrorModal } = useGlobalModal();

  const { mutate, isPending, error } = useMutation({
    mutationFn: () => postLocalUserInfo(data),
    onSuccess: (res) => {
      console.log(res);
      setSuccessModal({
        open: true,
        text: '회원 정보가 등록되었습니다.',
      });
    },
    onError: (err: any) => {
      console.log(err);
      setErrorModal({
        open: true,
        text: '예상치 못한 에러가 발생하였습니다.',
      });
    },
  });
  return { mutate, isPending, error };
};

export const useEmailAuth = (email: { email: string }) => {
  const { mutate, isPending, error } = useMutation({
    mutationFn: () => postEmailAuth(email),
    onSuccess: (res) => {
      //   console.log(res);
      useNotifySuccess('인증번호가 발송되었습니다.');
    },
    onError: (err: any) => {
      console.log(err);
      useNotifyError('예기치 못한 에러가 발생하였습니다.');
    },
  });
  return { mutate, isPending, error };
};
