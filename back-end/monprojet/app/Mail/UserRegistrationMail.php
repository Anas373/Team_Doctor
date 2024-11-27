<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class UserRegistrationMail extends Mailable
{
    use Queueable, SerializesModels;

    public $user;

    /**
     * cree le message de email
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * contenue de message
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('votre compte est cree avec succes')
                    ->view('emails.registration')
                    ->with([
                        'username' => $this->user->username,
                    ]);
    }
}
