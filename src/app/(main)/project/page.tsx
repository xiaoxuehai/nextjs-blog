import Container from '@/components/Container';
import { Card } from '@/components/ui/Card';

import { FadeIn } from './FadeIn';
export default function Project() {
  const projects = [
    {
      title: '项目1',
      description:
        '项目1描述项目1描述项目1描述项目1描述项目1描述项目1描述项目1描述',
      source: 'https://github.com/xxx/项目1',
      link: 'xxx',
    },
    {
      title: '项目2',
      description:
        '项目4描述项目4描述项目4描述项目4描述项目4描述项目4描述项目4描述',
      source: 'https://github.com/xxx/项目1',
      link: 'xxx',
    },
    {
      title: '项目3',
      description:
        '项目4描述项目4描述项目4描述项目4描述项目4描述项目4描述项目4描述',
      source: 'https://github.com/xxx/项目1',
      link: 'xxx',
    },
    {
      title: '项目4',
      description:
        '项目4描述项目4描述项目4描述项目4描述项目4描述项目4描述项目4描述',
      source: 'https://github.com/xxx/项目1',
      link: 'xxx',
    },
  ];
  return (
    <Container>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {projects.map((item, index) => (
          <FadeIn key={item.title + index} delay={index * 0.2}>
            <Card className='p-4'>
              <div className='flex flex-col gap-3'>
                <div className='flex items-center justify-between'>
                  <a
                    href={item.link}
                    target='_blank'
                    rel='noreferrer'
                    className='font-space-grotesk m-0 font-bold leading-5 text-gray-900 dark:text-white'
                  >
                    {item.title}
                  </a>
                  <a
                    className='rounded-3xl bg-accent px-3 py-1 text-sm'
                    href={item.source}
                    target='_blank'
                    rel='noreferrer'
                  >
                    源码
                  </a>
                </div>
                <p className='m-0 h-16 overflow-hidden overflow-ellipsis text-sm opacity-70'>
                  {item.description}
                </p>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
}
