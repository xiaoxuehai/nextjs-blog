import Background from '@/app/(main)/(home)/Background';
import Container from '@/components/Container';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog';

// import About from '@/contents/about/index.mdx';

export default function Page() {
  return (
    <div className='relative z-10'>
      <Background />
      <Container className='relative z-50 px-2'>
        {/* <Grid /> */}
        {/* <div className='prose relative z-20 max-w-7xl dark:prose-invert'>
          <About />
        </div> */}

        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </Container>
    </div>
  );
}
