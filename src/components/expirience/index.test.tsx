import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import useExpirience from "@/hooks/useExpirience";
import Experience from "./index";

vi.mock("@/hooks/useExpirience");

describe('Experience', () => {
    it('should render experience data correctly', () => {
        const mockExperience = [
            {
                puesto: 'Software Engineer',
                empresa: 'Tech Corp',
                fecha: '2018-2020',
                ubicacion: 'New York',
                responsabilidades: ['Developed features', 'Maintained codebase', 'Collaborated with team']
            },
            {
                puesto: 'Product Manager',
                empresa: 'Innovative Solutions',
                fecha: '2020-present',
                ubicacion: 'San Francisco',
                responsabilidades: ['Strategic planning', 'Market analysis', 'Team leadership']
            }
        ];

        vi.mocked(useExpirience).mockReturnValue({ experience: mockExperience });

        render(<Experience />);

        const title = screen.getByText('Experiencia');
        expect(title).toBeInTheDocument();

        mockExperience.forEach((job) => {
            const jobTitle = screen.getByText(`${job.puesto} · ${job.empresa}`);
            const jobDateLocation = screen.getByText(`${job.fecha} · ${job.ubicacion}`);
            expect(jobTitle).toBeInTheDocument();
            expect(jobDateLocation).toBeInTheDocument();
        });
    });
});
