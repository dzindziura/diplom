<?php

namespace App\Filament\Resources\PracticeBaseResource\Pages;

use App\Filament\Resources\PracticeBaseResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditPracticeBase extends EditRecord
{
    protected static string $resource = PracticeBaseResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
