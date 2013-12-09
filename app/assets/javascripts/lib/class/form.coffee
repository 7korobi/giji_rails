class Form
  @deploy: ->
    $(document).ready =>
      $('#phase_input').change ->
        $('#chr_vote_phase').val( value )

  @submit_chr_vote: (face_id)->
    $('#chr_vote_face_id').val(face_id)
    $('form.chr_vote')[0]?.submit()

