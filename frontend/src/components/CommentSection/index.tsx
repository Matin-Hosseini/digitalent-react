import { LiaComment } from "react-icons/lia";
import ContainerBox from "../ContainerBox";
import ContainerBoxTitle from "../ContainerBoxTitle";
import CommentItem from "./CommentItem";
import {
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

export default function CommentSection() {
  const fullScreen = useMediaQuery("(min-width:600px)");

  const [open, setOpen] = useState(false);
  return (
    <ContainerBox className={"p-5"}>
      <ContainerBoxTitle
        title={"نظرات کاربران"}
        icon={<LiaComment />}
        color="yellow"
      />
      <div>
        <p className="my-5 text-3xl">
          شما هم نظر خود را درباره این دوره ثبت کنید.
        </p>
        <button className="custom-btn" onClick={() => setOpen(true)}>
          ثبت نظر جدید
        </button>
        <Dialog
          open={open}
          onClose={() => setOpen((prev) => !prev)}
          fullScreen={fullScreen}
          sx={{
            fontFamily: "Vasir",
            "& .MuiDialog-paper": {
              background: "var(--section-bg)",
              color: "var(--text-color)",
            },
          }}
        >
          <DialogTitle id="alert-dialog-title">
            افزودن دیدگاه درباره مقاله
          </DialogTitle>
          <DialogContent>
            <div className="flex gap-3">
              <Avatar
                src="src/assets/images/6a1e69a6-6922-43ab-bc85-5d8548a32e20_cover_thumb.webp"
                alt="متین حسینی"
                sx={{
                  width: "4rem",
                  height: "4rem",
                  fontFamily: "vasir",
                  backgroundColor: "var(--purple)",
                  fontSize: "1.5rem",
                }}
              />

              <div>
                <div className="flex items-center gap-6 mb-3">
                  <div className="flex items-center gap-4">
                    <div>
                      <h6 className="text-2xl">علیرضا دهقان</h6>
                      <span className="text-lg text-[var(--gray)]">
                        ثبت نظر جدید
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <textarea
                name=""
                id=""
                className="bg-[var(--app-bg)] p-3 w-[80%]"
                placeholder="متن دیدکاه خود را بنویسید."
              ></textarea>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mt-5 divide-y">
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
    </ContainerBox>
  );
}
